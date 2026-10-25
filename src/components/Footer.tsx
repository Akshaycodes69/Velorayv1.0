import React, { useState } from 'react';
import { TabType } from '../types.ts';
import { VelorayLogoMark } from './VelorayLogoMark.tsx';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40">
      <div className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <VelorayLogoMark className="h-6 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-primary">
                VELORAY
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              High-velocity tactical telemetry and anti-glare sapphire glass turn-by-turn navigation for performance
              road, gravel, and endurance racing.
            </p>

            <div className="flex flex-col gap-space-xs mt-space-sm">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                Telemetry Firmware &amp; Route Drop Updates
              </span>
              {subscribed ? (
                <div className="p-2 bg-primary-container/20 text-primary-fixed border border-primary-fixed/40 rounded-DEFAULT text-xs font-label-caps uppercase">
                  ✓ Subscribed! You will receive priority route drops.
                </div>
              ) : (
                <form className="flex items-center gap-space-xs max-w-sm" onSubmit={handleSubscribe}>
                  <input
                    className="bg-surface-container font-label-sm text-label-sm px-space-sm py-space-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container flex-1 rounded-DEFAULT border border-outline-variant/30"
                    placeholder="cyclist@veloray.io"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-primary-fixed font-label-caps text-label-caps uppercase px-space-md py-space-xs transition-colors rounded-DEFAULT cursor-pointer border border-outline-variant/40"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Hardware Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Hardware
            </span>
            <button
              onClick={() => onSelectTab('hardware-and-specs')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left cursor-pointer"
            >
              Veloray Core Unit
            </button>
            <button
              onClick={() => onSelectTab('hardware-and-specs')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left cursor-pointer"
            >
              Machined Alloy Mounts
            </button>
            <button
              onClick={() => onSelectTab('shop-and-bundles')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left cursor-pointer"
            >
              ANT+ / BLE Heart Rate Strap
            </button>
            <button
              onClick={() => onSelectTab('shop-and-bundles')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left cursor-pointer"
            >
              Aero Speed &amp; Cadence Pods
            </button>
            <span className="font-label-sm text-label-sm text-primary-fixed mt-space-xs font-semibold">
              IP68 Dust &amp; Submersion Rated
            </span>
          </div>

          {/* Ecosystem Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Ecosystem &amp; API
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
              Open Telemetry SDK
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
              FIT 2.0 Real-time Parser
            </span>
            <button
              onClick={() => onSelectTab('companion-app')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left cursor-pointer"
            >
              iOS &amp; Android Companion
            </button>
            <span className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
              Low Latency BLE 5.3 Stack
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
              Cloud Auto-Sync
            </span>
          </div>

          {/* Support & Trust Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Support &amp; Trust
            </span>
            <div className="p-space-sm bg-surface-container rounded-DEFAULT border border-primary-fixed/20">
              <div className="flex items-center gap-space-xs text-primary-fixed">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-caps text-label-caps uppercase">
                  2-Year Race Crash Shield
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                Zero-cost crash replacement guarantee for competitive licensed racers.
              </p>
            </div>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                className="p-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors rounded-DEFAULT flex items-center justify-center cursor-pointer border border-outline-variant/30"
                aria-label="Developer Terminal"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </button>
              <button
                className="p-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors rounded-DEFAULT flex items-center justify-center cursor-pointer border border-outline-variant/30"
                aria-label="Podcast"
              >
                <span className="material-symbols-outlined text-[18px]">podcasts</span>
              </button>
              <button
                className="p-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors rounded-DEFAULT flex items-center justify-center cursor-pointer border border-outline-variant/30"
                aria-label="Global Community"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Integrations & Copyright */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-outline-variant/20">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Native Sync With:
            </span>
            <span className="px-space-xs py-0.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant rounded-DEFAULT border border-outline-variant/20">
              STRAVA
            </span>
            <span className="px-space-xs py-0.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant rounded-DEFAULT border border-outline-variant/20">
              KOMOOT
            </span>
            <span className="px-space-xs py-0.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant rounded-DEFAULT border border-outline-variant/20">
              GARMIN CONNECT
            </span>
            <span className="px-space-xs py-0.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant rounded-DEFAULT border border-outline-variant/20">
              APPLE HEALTH
            </span>
            <span className="px-space-xs py-0.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant rounded-DEFAULT border border-outline-variant/20">
              TRAININGPEAKS
            </span>
          </div>

          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline">
            <span className="font-metric-val text-label-sm font-normal">
              © 2025 VELORAY INSTRUMENTS LLC
            </span>
            <a className="hover:text-on-surface transition-colors" href="#privacy">
              Privacy Telemetry
            </a>
            <a className="hover:text-on-surface transition-colors" href="#terms">
              Hardware Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
