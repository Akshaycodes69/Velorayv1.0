import React from 'react';
import { TabType } from '../types.ts';
import { USER_AVATAR } from '../data/mockData.ts';
import { VelorayLogoMark } from './VelorayLogoMark.tsx';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onPreOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onPreOrderClick,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.6)] border-b border-surface-container-high/40">
      <div className="h-16 w-full px-4 sm:px-6 lg:px-margin-desktop flex items-center justify-between">
        {/* Brand & Title */}
        <div className="flex items-center gap-4 lg:gap-space-xl">
          <button
            onClick={() => onSelectTab('overview')}
            className="flex items-center gap-space-sm text-left focus:outline-none group cursor-pointer"
            aria-label="VELORAY Home"
          >
            <VelorayLogoMark className="h-7 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-primary leading-none">
                VELORAY
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline leading-none mt-1">
                AERO GPS // 01
              </span>
            </div>
          </button>

          {/* Live Status indicator */}
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT border border-outline-variant/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
            </span>
            <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest">
              BLE 5.3 Active
            </span>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-space-lg" aria-label="Main Navigation">
            <button
              onClick={() => onSelectTab('overview')}
              className={`font-label-caps uppercase transition-colors py-2 cursor-pointer ${
                currentTab === 'overview'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => onSelectTab('hardware-and-specs')}
              className={`font-label-caps text-label-caps uppercase transition-colors py-2 cursor-pointer ${
                currentTab === 'hardware-and-specs'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Hardware &amp; Specs
            </button>
            <button
              onClick={() => onSelectTab('companion-app')}
              className={`font-label-caps text-label-caps uppercase transition-colors py-2 cursor-pointer ${
                currentTab === 'companion-app'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Companion App
            </button>
            <button
              onClick={() => onSelectTab('shop-and-bundles')}
              className={`font-label-caps text-label-caps uppercase transition-colors py-2 cursor-pointer ${
                currentTab === 'shop-and-bundles'
                  ? 'text-primary-fixed border-b-2 border-primary-fixed'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Shop &amp; Bundles
            </button>
          </nav>
        </div>

        {/* Action controls: Cart, Pre-order, Profile */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          {/* Mobile Quick-Navigation Pills */}
          <div className="lg:hidden flex items-center gap-1 bg-surface-container p-1 rounded-DEFAULT border border-outline-variant/30 text-[10px]">
            <button
              onClick={() => onSelectTab('overview')}
              className={`px-2 py-1 rounded font-label-caps uppercase ${
                currentTab === 'overview' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-outline'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => onSelectTab('hardware-and-specs')}
              className={`px-2 py-1 rounded font-label-caps uppercase ${
                currentTab === 'hardware-and-specs' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-outline'
              }`}
            >
              Specs
            </button>
            <button
              onClick={() => onSelectTab('companion-app')}
              className={`px-2 py-1 rounded font-label-caps uppercase ${
                currentTab === 'companion-app' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-outline'
              }`}
            >
              App
            </button>
            <button
              onClick={() => onSelectTab('shop-and-bundles')}
              className={`px-2 py-1 rounded font-label-caps uppercase ${
                currentTab === 'shop-and-bundles' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-outline'
              }`}
            >
              Shop
            </button>
          </div>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 font-label-sm text-label-sm bg-primary-container text-on-primary-container px-1 py-0.2 rounded-DEFAULT font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Pre-Order CTA Button */}
          <button
            onClick={onPreOrderClick}
            className="hidden sm:flex items-center justify-center h-10 px-space-md bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim hover:text-on-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors rounded-DEFAULT font-semibold cursor-pointer shadow-md"
          >
            Pre-Order Now - $179
          </button>

          {/* Profile Avatar */}
          <div className="flex items-center pl-space-xs" title="Connected Pro Cyclist Account">
            <img
              alt="Profile avatar"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-primary-fixed/30"
              src={USER_AVATAR}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
