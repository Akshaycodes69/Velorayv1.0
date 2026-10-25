import React from 'react';
import { CartItem } from '../types.ts';
import { calculateCartTotal } from '../utils/telemetry.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const { subtotal, savings, shipping, total } = calculateCartTotal(
    items.map((i) => ({ price: i.product.price, originalPrice: i.product.originalPrice, quantity: i.quantity })),
    0,
    15
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="cart-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-container-low border-l border-outline-variant/40 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-space-lg border-b border-outline-variant/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed">shopping_bag</span>
              <h2 id="cart-title" className="font-headline-sm text-lg text-primary font-bold">
                Your Race Cockpit Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-outline hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-space-lg flex flex-col gap-3">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center my-auto py-12 text-center">
                <span className="material-symbols-outlined text-[48px] text-outline mb-2">
                  shopping_cart_off
                </span>
                <p className="text-sm text-on-surface-variant font-medium">
                  Your cockpit cart is currently empty.
                </p>
                <p className="text-xs text-outline mt-1 mb-4">
                  Add the VELORAY Core 01 Kit or accessories to reserve your Batch 03 spot.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary-fixed font-label-caps uppercase text-xs rounded-DEFAULT cursor-pointer"
                >
                  Browse Hardware Catalog
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-surface-container p-3 rounded-DEFAULT border border-outline-variant/30 flex gap-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-DEFAULT bg-surface-container-high shrink-0"
                  />

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {product.name}
                        </h4>
                        <span className="font-metric-val text-sm font-bold text-primary-fixed ml-2">
                          ${product.price * quantity}
                        </span>
                      </div>
                      <span className="text-[10px] text-outline line-through">
                        ${product.originalPrice * quantity} MSRP
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-outline-variant/10">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/30">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="text-xs text-outline hover:text-white px-1 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="font-metric-val text-xs text-white px-1 font-bold">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="text-xs text-outline hover:text-white px-1 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-[11px] text-error hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[13px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {items.length > 0 && (
            <div className="p-space-lg bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Hardware Subtotal:</span>
                  <span className="font-metric-val text-white font-bold">${subtotal}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-primary-fixed">
                    <span>Batch 03 Pre-Order Savings:</span>
                    <span className="font-metric-val font-bold">-${savings}</span>
                  </div>
                )}
                <div className="flex justify-between text-on-surface-variant">
                  <span>DHL Express Global Shipping:</span>
                  <span className="font-metric-val text-secondary-fixed">
                    {shipping === 0 ? 'FREE' : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-outline-variant/20 text-white">
                  <span>Total Due Today:</span>
                  <span className="font-metric-val text-xl text-primary-fixed">${total}</span>
                </div>
              </div>

              <div className="bg-surface-container-high px-3 py-1.5 rounded text-[11px] text-outline flex items-center justify-between">
                <span>Batch 03 Dispatch:</span>
                <span className="text-primary-fixed font-bold font-label-caps">JUNE 2025</span>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full h-12 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim font-label-caps uppercase font-bold rounded-DEFAULT flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">lock</span>
                Proceed to Pre-Order Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
