import React, { useState } from 'react';
import { SAMPLE_ROUTES } from '../data/mockData.ts';
import { RouteData } from '../types.ts';

export const CompanionAppView: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteData>(SAMPLE_ROUTES[0]);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced'>('idle');
  const [stravaEnabled, setStravaEnabled] = useState<boolean>(true);
  const [komootEnabled, setKomootEnabled] = useState<boolean>(true);
  const [hapticTurns, setHapticTurns] = useState<boolean>(true);
  const [activeScreenLayout, setActiveScreenLayout] = useState<'speed-elev' | 'power-cadence' | 'compass-distance'>('speed-elev');

  const handleSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('synced');
      setTimeout(() => setSyncStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-secondary-fixed border border-secondary-fixed/30">
            <span className="material-symbols-outlined text-[16px]">phonelink</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              iOS &amp; Android Ecosystem
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary">
            Companion Mobile Architecture
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Stream seamless vector navigation straight to your cockpit while your phone stays safely zipped in your
            jersey pocket with less than 2% battery drain per 100km.
          </p>
        </div>

        {/* Companion App Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Simulated Smartphone Interface */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] bg-black rounded-[36px] p-3 shadow-2xl border-4 border-surface-container-high ring-1 ring-outline-variant/30">
              {/* Phone Notch */}
              <div className="w-28 h-4 bg-surface-container-high mx-auto rounded-full mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
              </div>

              {/* Phone App Canvas */}
              <div className="bg-surface-container-lowest rounded-[28px] p-4 flex flex-col gap-3 text-xs border border-outline-variant/20">
                {/* Hardware Connection Card */}
                <div className="bg-surface-container p-3 rounded-xl border border-primary-fixed/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">satellite_alt</span>
                    </div>
                    <div>
                      <span className="font-label-caps text-primary uppercase block font-bold">
                        VELORAY CORE 01
                      </span>
                      <span className="text-[10px] text-primary-fixed">BLE 5.3 Active • 94% Batt</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-primary-fixed/20 text-primary-fixed rounded text-[9px] font-bold">
                    PAIRED
                  </span>
                </div>

                {/* Battery Savings Metric */}
                <div className="bg-surface-container-low p-2.5 rounded-lg flex items-center justify-between text-[11px]">
                  <span className="text-on-surface-variant">Phone Battery Drain:</span>
                  <span className="text-secondary-fixed font-bold font-metric-val">-1.8% / Hr</span>
                </div>

                {/* Active Route Preview */}
                <div className="bg-surface-container p-3 rounded-xl">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-label-caps text-outline uppercase text-[10px]">Active Route</span>
                    <span className="text-[10px] text-primary-fixed font-semibold">{selectedRoute.distanceKm} KM</span>
                  </div>
                  <h4 className="font-bold text-white text-sm truncate">{selectedRoute.name}</h4>
                  <p className="text-[10px] text-on-surface-variant">{selectedRoute.location}</p>

                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-outline-variant/20 text-[10px]">
                    <div>
                      <span className="text-outline block">Elevation Gain:</span>
                      <span className="font-bold text-white">+{selectedRoute.elevGainM} M</span>
                    </div>
                    <div>
                      <span className="text-outline block">Est. Duration:</span>
                      <span className="font-bold text-white">{selectedRoute.estDuration}</span>
                    </div>
                  </div>
                </div>

                {/* Turns Queue Preview */}
                <div className="bg-surface-container-low p-2.5 rounded-xl">
                  <span className="font-label-caps text-outline uppercase text-[9px] block mb-1">
                    Upcoming Cockpit Cues ({selectedRoute.turns.length})
                  </span>
                  <div className="flex flex-col gap-1.5 max-h-28 overflow-y-auto pr-1">
                    {selectedRoute.turns.map((turn) => (
                      <div
                        key={turn.id}
                        className="flex items-center justify-between p-1.5 bg-surface-container rounded text-[10px]"
                      >
                        <div className="flex items-center gap-1.5 truncate max-w-[180px]">
                          <span className="material-symbols-outlined text-xs text-primary-fixed">
                            {turn.icon}
                          </span>
                          <span className="truncate text-on-surface">{turn.instruction}</span>
                        </div>
                        <span className="font-metric-val text-primary-fixed font-bold text-[9px]">
                          {turn.distanceMeters}m
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sync Button */}
                <button
                  onClick={handleSync}
                  disabled={syncStatus === 'syncing'}
                  className="w-full h-10 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim font-label-caps uppercase font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">
                    {syncStatus === 'syncing' ? 'sync' : syncStatus === 'synced' ? 'check' : 'cloud_upload'}
                  </span>
                  {syncStatus === 'syncing'
                    ? 'Syncing to Cockpit...'
                    : syncStatus === 'synced'
                    ? 'Route Pushed Successfully!'
                    : 'Push Route to VELORAY'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Route Selector & Settings */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Route Library Selector */}
            <div className="bg-surface-container p-space-lg rounded-DEFAULT border border-outline-variant/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-caps text-primary-fixed uppercase tracking-wider">
                  Route Library &amp; GPX Cloud Sync
                </span>
                <span className="font-label-sm text-outline uppercase">3 Preloaded Races</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Select GPX Route to Stage
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {SAMPLE_ROUTES.map((route) => (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRoute(route)}
                    className={`p-3 rounded-DEFAULT text-left transition-colors border cursor-pointer flex flex-col justify-between ${
                      selectedRoute.id === route.id
                        ? 'bg-surface-container-high border-primary-fixed text-primary'
                        : 'bg-surface-container-low hover:bg-surface-container-high/50 border-outline-variant/20 text-on-surface-variant'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-primary-fixed uppercase">
                          {route.terrain}
                        </span>
                        <span className="text-[10px] text-outline">{route.distanceKm} KM</span>
                      </div>
                      <h4 className="font-bold text-xs text-white leading-snug mb-1">{route.name}</h4>
                      <p className="text-[10px] text-on-surface-variant truncate">{route.location}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-outline-variant/20 text-[10px] flex justify-between text-outline">
                      <span>+{route.elevGainM}m</span>
                      <span>{route.turns.length} turns</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Display Field Layout Configurator */}
            <div className="bg-surface-container p-space-lg rounded-DEFAULT border border-outline-variant/30">
              <span className="font-label-caps text-secondary-fixed uppercase tracking-wider block mb-1">
                Cockpit Telemetry Customizer
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Round Display Field Priority
              </h3>
              <p className="text-xs text-on-surface-variant mb-4">
                Choose which analytical metric pairs illuminate on the circular bottom tray during navigation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setActiveScreenLayout('speed-elev')}
                  className={`p-3 rounded-DEFAULT text-left border cursor-pointer transition-colors ${
                    activeScreenLayout === 'speed-elev'
                      ? 'bg-surface-container-high border-secondary-fixed text-primary'
                      : 'bg-surface-container-low border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <span className="font-label-caps text-[10px] uppercase block text-secondary-fixed">
                    Standard Road
                  </span>
                  <p className="font-bold text-sm text-white mt-1">Speed &amp; Elev Gain</p>
                  <span className="text-[10px] text-outline">Live KM/H + Barometric M</span>
                </button>

                <button
                  onClick={() => setActiveScreenLayout('power-cadence')}
                  className={`p-3 rounded-DEFAULT text-left border cursor-pointer transition-colors ${
                    activeScreenLayout === 'power-cadence'
                      ? 'bg-surface-container-high border-secondary-fixed text-primary'
                      : 'bg-surface-container-low border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <span className="font-label-caps text-[10px] uppercase block text-primary-fixed">
                    Race &amp; Training
                  </span>
                  <p className="font-bold text-sm text-white mt-1">3s Power &amp; Cadence</p>
                  <span className="text-[10px] text-outline">Watts + RPM + Zones</span>
                </button>

                <button
                  onClick={() => setActiveScreenLayout('compass-distance')}
                  className={`p-3 rounded-DEFAULT text-left border cursor-pointer transition-colors ${
                    activeScreenLayout === 'compass-distance'
                      ? 'bg-surface-container-high border-secondary-fixed text-primary'
                      : 'bg-surface-container-low border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <span className="font-label-caps text-[10px] uppercase block text-outline">
                    Gravel &amp; Trail
                  </span>
                  <p className="font-bold text-sm text-white mt-1">Compass &amp; Waypoint</p>
                  <span className="text-[10px] text-outline">Bearing ° + Direct Line KM</span>
                </button>
              </div>
            </div>

            {/* Community & Integrations */}
            <div className="bg-surface-container p-space-lg rounded-DEFAULT border border-outline-variant/30 flex flex-col gap-3">
              <span className="font-label-caps text-outline uppercase tracking-wider text-xs">
                Community &amp; Platform Sync
              </span>

              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-DEFAULT border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed">flag</span>
                  <div>
                    <span className="font-bold text-sm text-primary block">Strava Live Segments</span>
                    <span className="text-xs text-on-surface-variant">
                      Auto-alert KOM deltas with dual ERM haptic pulses
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={stravaEnabled}
                  onChange={(e) => setStravaEnabled(e.target.checked)}
                  className="w-5 h-5 accent-primary-container cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-DEFAULT border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed">route</span>
                  <div>
                    <span className="font-bold text-sm text-primary block">Komoot Offline Sync</span>
                    <span className="text-xs text-on-surface-variant">
                      Auto-import planned gravel routes from saved tours
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={komootEnabled}
                  onChange={(e) => setKomootEnabled(e.target.checked)}
                  className="w-5 h-5 accent-primary-container cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-DEFAULT border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">vibration</span>
                  <div>
                    <span className="font-bold text-sm text-primary block">Cockpit Haptic Turn Alerts</span>
                    <span className="text-xs text-on-surface-variant">
                      Double-pulse 50m before sharp intersections
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={hapticTurns}
                  onChange={(e) => setHapticTurns(e.target.checked)}
                  className="w-5 h-5 accent-primary-container cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
