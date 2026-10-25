import React, { useState } from 'react';
import { CartItem } from '../types.ts';
import { calculateCartTotal } from '../utils/telemetry.ts';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState({
    name: 'Alexandre Mercier',
    email: 'alex@veloray.cc',
    address: '448 Alpine Way',
    city: 'Boulder',
    state: 'CO',
    zip: '80302',
    country: 'United States',
    clampSize: '31.8mm (Aero Road & Gravel)',
    cardNumber: '•••• •••• •••• 4092',
    expiry: '09/28',
    cvc: '•••',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const { subtotal, discount, shipping, total } = calculateCartTotal(
    items.map((i) => ({ price: i.product.price, quantity: i.quantity })),
    0,
    15
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = `VR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationNumber(randomId);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container border border-primary-fixed/40 max-w-xl w-full rounded-DEFAULT p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-outline hover:text-white transition-colors cursor-pointer"
          aria-label="Close checkout"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {confirmationNumber ? (
          /* Success Screen */
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
            </div>
            <span className="font-label-caps text-xs text-primary-fixed uppercase tracking-widest block mb-1">
              Batch 03 Allocation Reserved
            </span>
            <h3 className="font-headline-lg text-2xl text-primary font-bold mb-2">
              Order Confirmed // {confirmationNumber}
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mb-6">
              Thank you for equipping your cockpit with VELORAY. A receipt and confirmation packet have been dispatched
              to <strong className="text-white">{formData.email}</strong>.
            </p>

            <div className="w-full bg-surface-container-lowest p-4 rounded-DEFAULT border border-outline-variant/30 text-left text-xs mb-6">
              <div className="flex justify-between pb-2 border-b border-outline-variant/20 mb-2">
                <span className="text-outline">Estimated Dispatch:</span>
                <span className="text-primary-fixed font-bold">June 2025 (Batch 03)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-outline-variant/20 mb-2">
                <span className="text-outline">Handlebar Clamp:</span>
                <span className="text-white font-medium">{formData.clampSize}</span>
              </div>
              <div className="flex justify-between text-white font-bold">
                <span>Total Charged:</span>
                <span className="font-metric-val text-primary-fixed text-sm">${total}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setConfirmationNumber(null);
                onOrderCompleted();
                onClose();
              }}
              className="w-full h-11 bg-primary-container text-on-primary-container font-label-caps uppercase font-bold rounded-DEFAULT cursor-pointer hover:bg-primary-fixed-dim transition-colors"
            >
              Return to Cockpit Telemetry
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed text-2xl">lock</span>
              <div>
                <span className="font-label-caps text-xs text-primary-fixed uppercase tracking-wider block">
                  Secure Pre-Order Checkout
                </span>
                <h3 className="font-headline-sm text-lg text-primary font-bold">
                  VELORAY Batch 03 Reservation
                </h3>
              </div>
            </div>

            {/* Rider Information */}
            <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20 text-xs">
              <span className="font-label-caps text-outline uppercase">1. Rider &amp; Shipping Details</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-outline block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-outline block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-outline block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] text-outline block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-outline block mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-outline block mb-1">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
                  />
                </div>
              </div>
            </div>

            {/* Cockpit Mount Specification */}
            <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20 text-xs">
              <span className="font-label-caps text-outline uppercase">2. Handlebar Clamp Diameter</span>
              <select
                value={formData.clampSize}
                onChange={(e) => setFormData({ ...formData, clampSize: e.target.value })}
                className="w-full bg-surface-container-lowest p-2 rounded border border-outline-variant/40 text-white focus:outline-none focus:border-primary-fixed"
              >
                <option value="31.8mm (Aero Road & Gravel)">31.8mm Standard (Aero Road, Gravel & Drop Bars)</option>
                <option value="22.2mm (Urban & Flat Bar)">22.2mm Universal (Urban Couriers & Flat Bars)</option>
                <option value="35.0mm (Downhill MTB)">35.0mm Oversized (Trail & Downhill MTB)</option>
                <option value="Integrated Stem Direct Bolt">Direct Stem Faceplate Dual Bolt Mount</option>
              </select>
            </div>

            {/* Payment Section */}
            <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20 text-xs">
              <span className="font-label-caps text-outline uppercase">3. Encrypted Payment</span>
              <div className="bg-surface-container-lowest p-3 rounded border border-outline-variant/30 flex flex-col gap-2">
                <div>
                  <label className="text-[10px] text-outline block mb-0.5">Card Number</label>
                  <input
                    type="text"
                    readOnly
                    value={formData.cardNumber}
                    className="w-full bg-surface-container p-1.5 rounded text-white font-metric-val text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-outline block mb-0.5">Expires</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.expiry}
                      className="w-full bg-surface-container p-1.5 rounded text-white font-metric-val text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-outline block mb-0.5">CVC</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.cvc}
                      className="w-full bg-surface-container p-1.5 rounded text-white font-metric-val text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-outline uppercase block">Total Due:</span>
                <span className="font-metric-val text-2xl text-primary-fixed font-bold">${total}</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 px-6 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim font-label-caps uppercase font-bold rounded-DEFAULT flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                    Securing Allocation...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">check</span>
                    Authorize &amp; Pre-Order
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
