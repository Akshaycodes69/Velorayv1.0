import React from 'react';
import { PRODUCTS } from '../data/mockData.ts';
import { ProductItem } from '../types.ts';

interface ShopBundlesViewProps {
  onAddToCart: (product: ProductItem) => void;
  onInstantPreOrder: (product: ProductItem) => void;
}

export const ShopBundlesView: React.FC<ShopBundlesViewProps> = ({
  onAddToCart,
  onInstantPreOrder,
}) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-primary-fixed border border-primary-fixed/30">
            <span className="material-symbols-outlined text-[16px]">shopping_cart_checkout</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              Batch 03 Pre-Order Catalog
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary">
            Equip Your Cockpit
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Choose your configuration. All VELORAY Core units include free lifetime firmware updates, zero recurring
            subscription fees, and our 2-Year Race Crash Replacement Shield.
          </p>
        </div>

        {/* Featured Kits & Bundles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className={`bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between border relative ${
                product.type === 'core'
                  ? 'border-primary-fixed shadow-[0_0_25px_rgba(202,243,0,0.1)]'
                  : 'border-outline-variant/30'
              }`}
            >
              {product.badge && (
                <div className="absolute -top-3 left-6 bg-primary-container text-on-primary-container px-3 py-0.5 rounded-DEFAULT font-label-caps text-[10px] uppercase font-bold tracking-wider shadow">
                  {product.badge}
                </div>
              )}

              <div>
                {/* Product Image */}
                <div className="w-full h-44 rounded-DEFAULT overflow-hidden bg-surface-container-high mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-80"></div>
                  {product.inStockRemaining && (
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-primary-fixed border border-primary-fixed/30">
                      {product.inStockRemaining} OF 500 REMAINING
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="font-metric-val text-2xl text-primary-fixed font-bold leading-none">
                      ${product.price}
                    </span>
                    <span className="text-xs text-outline line-through mt-0.5">
                      ${product.originalPrice} MSRP
                    </span>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {product.subtitle}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-on-surface">
                      <span className="material-symbols-outlined text-primary-fixed text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/20">
                <button
                  onClick={() => onInstantPreOrder(product)}
                  className="w-full h-11 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim font-label-caps text-label-caps uppercase font-bold rounded-DEFAULT flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  Pre-Order — ${product.price}
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full h-10 bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-caps text-label-caps uppercase rounded-DEFAULT flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Modular Accessories */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="font-label-caps text-outline uppercase tracking-wider block text-xs">
                Precision Hardware
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Modular Accessories &amp; Mounts
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {PRODUCTS.slice(3).map((accessory) => (
              <div
                key={accessory.id}
                className="bg-surface-container p-space-lg rounded-DEFAULT flex flex-col sm:flex-row gap-4 justify-between border border-outline-variant/20 hover:border-outline-variant/50 transition-colors"
              >
                <div className="w-full sm:w-36 h-28 rounded-DEFAULT overflow-hidden bg-surface-container-high shrink-0">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-headline-sm text-sm text-primary font-bold">
                        {accessory.name}
                      </h4>
                      <span className="font-metric-val text-lg text-primary-fixed font-bold">
                        ${accessory.price}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-2">
                      {accessory.subtitle}
                    </p>
                    <ul className="text-[11px] text-outline list-disc list-inside">
                      {accessory.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 flex items-center justify-end">
                    <button
                      onClick={() => onAddToCart(accessory)}
                      className="h-8 px-3 bg-surface-container-high hover:bg-surface-container-highest text-primary-fixed font-label-caps text-[10px] uppercase font-bold rounded-DEFAULT flex items-center gap-1 cursor-pointer transition-colors border border-outline-variant/30"
                    >
                      <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-surface-container-low p-space-lg rounded-DEFAULT border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">shield</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-base text-primary font-bold">
                The VELORAY Racer Shield Promise
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                30-day trial refund guarantee. If you crash in a sanctioned race within 2 years, we replace the hardware
                unit for zero cost.
              </p>
            </div>
          </div>
          <span className="font-label-caps text-xs text-primary-fixed uppercase tracking-wider shrink-0 bg-surface-container px-3 py-1.5 rounded-DEFAULT border border-primary-fixed/30">
            Zero Recurring Fees
          </span>
        </div>
      </div>
    </div>
  );
};
