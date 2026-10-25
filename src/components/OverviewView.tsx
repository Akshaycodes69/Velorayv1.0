import React, { useState } from 'react';
import { CircularCockpitDisplay } from './CircularCockpitDisplay.tsx';
import { GRAVEL_IMAGE, URBAN_IMAGE, ALPINE_IMAGE } from '../data/mockData.ts';
import { TabType } from '../types.ts';

interface OverviewViewProps {
  onSelectTab: (tab: TabType) => void;
  onPreOrder: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onSelectTab, onPreOrder }) => {
  const [sunlightActive, setSunlightActive] = useState<boolean>(true);
  const [selectedProof, setSelectedProof] = useState<number | null>(null);

  const proofItems = [
    {
      rider: 'Marek Kowalski',
      role: 'Ultra Gravel Racer • Badlands Finisher',
      quote:
        'During the 350-mile Unbound course in baking Kansas sun, fellow racers had phones overheated on handlebars by noon. VELORAY ran continuously for 21 hours straight without missing a single gravel fork.',
      image: GRAVEL_IMAGE,
      tag: 'Flint Hills Gravel // 348 KM',
      initials: 'MK',
      stats: '21h 14m ride • 41°C peak heat • 0 reboots',
    },
    {
      rider: 'Jenna Lin',
      role: 'City Courier • Alleycat Champion',
      quote:
        'Working 10-hour rush shifts in dense Chicago traffic requires immediate turn instinct. The giant green arrow and tactile distance counter keep my chin up and eyes on taxi doors instead of staring down at a phone.',
      image: URBAN_IMAGE,
      tag: 'Chicago Downtown Grid // 88 KM Shift',
      initials: 'JL',
      stats: '142 delivery waypoints • Heavy rain • Glove-dial operable',
    },
    {
      rider: 'David Bernier',
      role: 'Cat 1 Road Racer • Haute Route',
      quote:
        'The live Strava segment ping with haptic buzz on the Stelvio pass switchbacks was unreal. The elevation gain tracker is pinpoint accurate against barometric changes. Best cockpit upgrade in a decade.',
      image: ALPINE_IMAGE,
      tag: 'Passo dello Stelvio // +2,757M Gain',
      initials: 'DB',
      stats: '48 hairpins • Barometric altimeter • PR KOM +0:04s',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO & TELEMETRY COCKPIT */}
      <section className="relative w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl overflow-hidden bg-surface">
        {/* Atmospheric subtle glows */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-fixed/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-primary-fixed border border-outline-variant/30">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-fixed">
                Next-Gen Cycling Telemetry • Bluetooth 5.3
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Turn-by-Turn Precision.
              <br />
              <span className="text-primary-fixed">Zero Distractions.</span>
            </h1>

            {/* Subhead */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              An ultra-compact circular transflective handlebar display engineered for pure focus.
              Instant glanceable route prompts streamed seamlessly from your phone with 35h battery
              life and IP68 weatherproofing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <button
                onClick={onPreOrder}
                className="h-12 px-space-lg bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim hover:text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-semibold rounded-DEFAULT flex items-center justify-center gap-space-xs transition-colors shadow-lg cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Order VELORAY Core — $179
              </button>

              <button
                onClick={() => onSelectTab('hardware-and-specs')}
                className="h-12 px-space-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-caps text-label-caps uppercase tracking-wider rounded-DEFAULT flex items-center justify-center gap-space-xs transition-colors cursor-pointer border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Explore Interactive Specs
              </button>
            </div>

            {/* Trust Mini-Indicator */}
            <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
              <div className="flex items-center gap-1 text-primary-fixed">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="font-label-sm text-label-sm tracking-wider uppercase">
                Tested in 1,200+ Alpine &amp; Desert Kilometers
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Hardware Telemetry Display Mock */}
          <div className="lg:col-span-5 flex justify-center relative">
            <CircularCockpitDisplay initialMode="turn-by-turn" />
          </div>
        </div>

        {/* Key Stats Horizon Bar */}
        <div className="max-w-7xl mx-auto mt-space-xl pt-space-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col border border-outline-variant/20 hover:border-primary-fixed/40 transition-colors">
              <div className="flex items-center gap-space-xs text-primary-fixed mb-1">
                <span className="material-symbols-outlined text-[20px]">battery_charging_full</span>
                <span className="font-label-caps text-label-caps uppercase">Endurance Core</span>
              </div>
              <span className="font-headline-md text-headline-md text-primary">35 Hours</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Single charge runtime with transflective sunlight mode.
              </span>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col border border-outline-variant/20 hover:border-secondary-fixed/40 transition-colors">
              <div className="flex items-center gap-space-xs text-secondary-fixed mb-1">
                <span className="material-symbols-outlined text-[20px]">water_drop</span>
                <span className="font-label-caps text-label-caps uppercase">Submersion Shield</span>
              </div>
              <span className="font-headline-md text-headline-md text-primary">IP68 Rated</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Guaranteed waterproof in torrential storms and river fords.
              </span>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col border border-outline-variant/20 hover:border-primary-fixed/40 transition-colors">
              <div className="flex items-center gap-space-xs text-primary-fixed mb-1">
                <span className="material-symbols-outlined text-[20px]">speed</span>
                <span className="font-label-caps text-label-caps uppercase">Off-Course Calc</span>
              </div>
              <span className="font-headline-md text-headline-md text-primary">&lt;0.3s Latency</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Instant hardware re-routing without smartphone delay.
              </span>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col border border-outline-variant/20 hover:border-secondary-fixed/40 transition-colors">
              <div className="flex items-center gap-space-xs text-secondary-fixed mb-1">
                <span className="material-symbols-outlined text-[20px]">fit_screen</span>
                <span className="font-label-caps text-label-caps uppercase">Cockpit Versatility</span>
              </div>
              <span className="font-headline-md text-headline-md text-primary">22.2 - 31.8mm</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Machined alloy out-front &amp; aero-stem universal clamps.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY FEATURE GRID */}
      <section className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface-container-lowest border-y border-surface-container-high/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest mb-2">
                Tactical Engineering
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Engineered for the Open Road
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Zero bloatware, touchscreens that fumble in rain, or endless setup submenus. Just pure
              directional clarity when pushing zone 4.
            </p>
          </div>

          {/* Bento-style 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Card 1: Glanceable Circular UI */}
            <div className="bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between relative group hover:bg-surface-container-high transition-colors border border-outline-variant/30">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-highest flex items-center justify-center text-primary-fixed mb-2">
                  <span className="material-symbols-outlined text-[24px]">wb_sunny</span>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-outline">
                  Optics &amp; Display
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Glanceable Circular UI
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-contrast transflective MIP screen utilizes ambient sunlight rather than fighting it.
                  Integrated photometric light sensors auto-shift contrast in tunnels and low-light alpine passes.
                </p>
              </div>
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-DEFAULT flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px]">contrast</span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface">
                    Sunlight Legibility Ratio
                  </span>
                </div>
                <span className="font-metric-val text-headline-sm text-primary-fixed font-bold">
                  14:1 AR
                </span>
              </div>
            </div>

            {/* Card 2: True BLE Low-Energy Sync */}
            <div className="bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between relative group hover:bg-surface-container-high transition-colors border border-outline-variant/30">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-highest flex items-center justify-center text-secondary-fixed mb-2">
                  <span className="material-symbols-outlined text-[24px]">bluetooth_connected</span>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-outline">
                  Ecosystem &amp; Protocol
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  True BLE 5.3 Low-Energy Sync
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Offload route computation dynamically. Your phone runs seamless vector navigation in
                  your jersey pocket with less than 2% battery consumption per 100km ride.
                </p>
              </div>
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-DEFAULT flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">phone_android</span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface">
                    Phone Battery Impact
                  </span>
                </div>
                <span className="font-metric-val text-headline-sm text-secondary-fixed font-bold">
                  -1.8% / Hr
                </span>
              </div>
            </div>

            {/* Card 3: Dual Mode Navigation */}
            <div className="bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between relative group hover:bg-surface-container-high transition-colors border border-outline-variant/30">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-highest flex items-center justify-center text-primary-fixed mb-2">
                  <span className="material-symbols-outlined text-[24px]">explore</span>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-outline">
                  Waypoint Routing
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Turn-by-Turn &amp; Compass Modes
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Switch fluidly between precise street intersection turns and free-form off-road waypoint
                  compass bearings for untracked gravel and bikepacking journeys.
                </p>
              </div>
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-DEFAULT flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px]">sync_alt</span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface">
                    Mode Toggle Action
                  </span>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface bg-surface-container-high px-2 py-1 rounded">
                  Single Glove Tap
                </span>
              </div>
            </div>

            {/* Card 4: Strava & Komoot Live Segments */}
            <div className="bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between relative group hover:bg-surface-container-high transition-colors border border-outline-variant/30">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-highest flex items-center justify-center text-secondary-fixed mb-2">
                  <span className="material-symbols-outlined text-[24px]">flag</span>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-outline">
                  Community Telemetry
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Strava &amp; Komoot Live Segments
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Auto-sync GPX routes and live segment alerts with haptic vibration feedback. Real-time delta
                  versus your personal record or current KOM leaderboard times.
                </p>
              </div>
              <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-DEFAULT flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">vibration</span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface">
                    Dual ERM Haptic Feedback
                  </span>
                </div>
                <span className="font-metric-val text-headline-sm text-primary-fixed font-bold">
                  PR +0:04s
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIVE ROUTE SIMULATION / COCKPIT COMPARISON */}
      <section className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface" id="interactive-demo">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest">
              Head-to-Head Reality
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Handlebar Phone vs. VELORAY Cockpit
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Why serious endurance athletes don't mount a $1,200 glass smartphone to high-vibration carbon cockpits.
            </p>

            {/* Interactive Sunlight Toggle */}
            <div className="mt-2 inline-flex items-center gap-2 self-center bg-surface-container px-3 py-1.5 rounded-DEFAULT border border-outline-variant/40">
              <span className="text-xs text-outline font-label-caps">Simulate Environment:</span>
              <button
                onClick={() => setSunlightActive(true)}
                className={`text-xs px-2.5 py-1 rounded cursor-pointer font-semibold transition-colors ${
                  sunlightActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Direct Mid-Day Sun
              </button>
              <button
                onClick={() => setSunlightActive(false)}
                className={`text-xs px-2.5 py-1 rounded cursor-pointer font-semibold transition-colors ${
                  !sunlightActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Overcast / Shade
              </button>
            </div>
          </div>

          {/* Comparative Dual Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-stretch">
            {/* Negative Case: Phone Cockpit */}
            <div className="bg-surface-container-low p-space-xl rounded-DEFAULT flex flex-col justify-between border border-error/30">
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-lowest p-space-sm rounded-DEFAULT">
                  <span className="font-label-caps text-label-caps uppercase text-error tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">cancel</span> Traditional Phone Mount
                  </span>
                  <span className="font-label-sm text-label-sm text-outline uppercase">Sub-optimal Setup</span>
                </div>

                {/* Visual representation of phone issues */}
                <div
                  className={`w-full h-48 bg-surface-container-lowest rounded-DEFAULT p-space-md flex flex-col justify-center items-center relative overflow-hidden mb-space-md transition-opacity duration-300 ${
                    sunlightActive ? 'opacity-90' : 'opacity-70'
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-error/15 via-transparent to-surface-bright/40 pointer-events-none ${
                      sunlightActive ? 'backdrop-blur-[2px]' : ''
                    }`}
                  ></div>
                  <span className="material-symbols-outlined text-[48px] text-error mb-2">screen_rotation</span>
                  <p className="font-label-caps text-label-caps text-error text-center uppercase tracking-widest font-bold">
                    {sunlightActive ? 'Screen Dimmed: High Temp Throttling' : 'Battery Drain 38%/hr'}
                  </p>
                  <span className="font-body-sm text-body-sm text-outline mt-1 text-center">
                    {sunlightActive ? 'Unreadable in direct mid-day sun glare' : 'Overheating risk under continuous GPS lock'}
                  </span>
                </div>

                <div className="flex flex-col gap-space-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">close</span>
                    <span>
                      <strong>Severe Glare:</strong> OLED glossy glass mirrors direct sunlight and polarized lenses.
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">close</span>
                    <span>
                      <strong>Severe Battery Drain:</strong> Constant GPS and max screen brightness drains phone in 2.5 hours.
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">close</span>
                    <span>
                      <strong>Vibration Damage:</strong> Carbon road/gravel chatter permanently destroys smartphone optical image stabilization (OIS).
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">close</span>
                    <span>
                      <strong>Rain Ghost Taps:</strong> Raindrops on touchscreen trigger accidental route cancellations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-space-lg pt-space-sm border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-outline uppercase">
                  Typical Outcome: Dead battery before route finish
                </span>
              </div>
            </div>

            {/* Positive Case: VELORAY Cockpit */}
            <div className="bg-surface-container p-space-xl rounded-DEFAULT flex flex-col justify-between shadow-xl relative overflow-hidden border border-primary-fixed/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-high p-space-sm rounded-DEFAULT">
                  <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> VELORAY Cockpit Ecosystem
                  </span>
                  <span className="font-label-sm text-label-sm text-primary-fixed uppercase font-semibold">
                    Purpose-Built
                  </span>
                </div>

                {/* Visual Representation of Veloray Advantage */}
                <div className="w-full h-48 bg-surface-container-lowest rounded-DEFAULT p-space-md flex flex-col justify-center items-center relative overflow-hidden mb-space-md border border-outline-variant/30">
                  <div className="flex items-center gap-space-lg">
                    <div className="w-24 h-24 rounded-full bg-surface-container-high p-2 flex items-center justify-center shadow-lg ring-1 ring-primary-fixed/30">
                      <div className="w-full h-full rounded-full bg-surface-container-lowest flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined text-primary-fixed text-[28px]">navigation</span>
                        <span className="font-label-caps text-label-caps text-primary mt-0.5">85m RT</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-caps text-label-caps text-primary-fixed uppercase">
                        {sunlightActive ? 'Sunlight Active Mode (14:1 AR)' : 'Ambient Backlight Active'}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary">0% Glare Optics</span>
                      <span className="font-label-sm text-label-sm text-outline">
                        Transflective anti-scratch sapphire
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-space-sm text-body-sm text-on-surface">
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                    <span>
                      <strong>Sunlight Amplification:</strong> Transflective screen gets clearer the brighter the ambient sun.
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                    <span>
                      <strong>35h Battery Autonomy:</strong> Ride multi-day brevets or weekly commutes without reaching for a cable.
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                    <span>
                      <strong>Rugged Shock Proofing:</strong> Solid-state internals rated for 15G rough cobblestone and MTB descent vibration.
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check</span>
                    <span>
                      <strong>Mechanical Actuation:</strong> Hard physical knurled dial operable with heavy winter neoprene gloves.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-space-lg pt-space-sm flex justify-between items-center border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase">
                  System Status: Fully Autonomous GPS
                </span>
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL PROOF & RIDER TESTIMONIALS */}
      <section className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface-container-lowest border-y border-surface-container-high/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest mb-2 block">
                Proven Under Pressure
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Trusted by Ultra Racers &amp; Couriers
              </h2>
            </div>
            <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-xs rounded-DEFAULT border border-outline-variant/30">
              <span className="font-metric-val text-headline-sm text-primary-fixed">4.9 / 5</span>
              <span className="font-label-sm text-label-sm text-outline uppercase">
                Across 2,400+ Verified Riders
              </span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {proofItems.map((item, idx) => (
              <div
                key={item.rider}
                className="bg-surface-container p-space-lg rounded-DEFAULT flex flex-col justify-between border border-outline-variant/20 hover:border-primary-fixed/40 transition-colors"
              >
                <div className="flex flex-col gap-space-md">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-primary-fixed">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  <p className="font-body-md text-body-md text-on-surface italic">
                    "{item.quote}"
                  </p>

                  {/* Route Proof Snapshot Image */}
                  <div
                    onClick={() => setSelectedProof(idx)}
                    className="relative w-full h-36 rounded-DEFAULT overflow-hidden bg-surface-container-high group cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={item.tag}
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label-sm text-label-sm text-primary-fixed border border-primary-fixed/30">
                      {item.tag}
                    </div>
                  </div>
                </div>

                <div className="pt-space-md flex items-center gap-space-sm mt-space-sm border-t border-outline-variant/20">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-label-caps text-label-caps text-primary-fixed font-bold">
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary text-[15px] leading-tight">
                      {item.rider}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline uppercase">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Ride Proof Modal */}
          {selectedProof !== null && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
              <div className="bg-surface-container p-6 rounded-DEFAULT border border-primary-fixed/50 max-w-lg w-full relative">
                <button
                  onClick={() => setSelectedProof(null)}
                  className="absolute top-4 right-4 text-outline hover:text-white"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <div className="font-label-caps text-primary-fixed uppercase tracking-wider mb-1">
                  Field Verification Telemetry
                </div>
                <h3 className="font-headline-sm text-primary text-xl font-bold mb-2">
                  {proofItems[selectedProof].tag}
                </h3>
                <img
                  src={proofItems[selectedProof].image}
                  alt="Telemetry snapshot"
                  className="w-full h-48 object-cover rounded-DEFAULT mb-3 border border-outline-variant/30"
                />
                <div className="bg-surface-container-lowest p-3 rounded-DEFAULT mb-3">
                  <span className="font-label-caps text-outline uppercase block mb-1">Session Telemetry Log:</span>
                  <span className="font-metric-val text-primary-fixed text-sm">
                    {proofItems[selectedProof].stats}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant italic mb-4">
                  "{proofItems[selectedProof].quote}" — {proofItems[selectedProof].rider}
                </p>
                <button
                  onClick={() => setSelectedProof(null)}
                  className="w-full h-10 bg-primary-container text-on-primary-container font-label-caps uppercase font-bold rounded-DEFAULT"
                >
                  Close Telemetry Log
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: PRE-ORDER BANNER WITH BUNDLE PERKS */}
      <section className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface" id="preorder">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-high rounded-DEFAULT p-space-xl relative overflow-hidden shadow-2xl border border-primary-fixed/30">
            {/* Accent decorative glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
              {/* Offer Details */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-lowest rounded-DEFAULT text-primary-fixed border border-primary-fixed/30">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">
                    Batch 03 Pre-Order • Shipping June 2025
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Equip Your Cockpit with VELORAY Core.
                </h2>

                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Includes precision out-front machined alloy mount, aero silicone jacket, USB-C magnetic pogo
                  charger, and lifetime firmware updates with zero recurring subscription fees.
                </p>

                {/* Pre-order Bundle Perks List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">30-Day Trail Guarantee</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">Universal Aero Handlebar Mount</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">No Subscription Required</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface">2-Year Crash Replacement Shield</span>
                  </div>
                </div>
              </div>

              {/* Checkout Box & Pricing */}
              <div className="lg:col-span-5 bg-surface-container-lowest p-space-xl rounded-DEFAULT flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-outline">
                      Complete Race Kit
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      VELORAY Core 01
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-headline-lg text-headline-lg text-primary-fixed font-bold leading-none">
                      $179
                    </span>
                    <span className="font-label-sm text-label-sm text-outline line-through mt-0.5">
                      $229 MSRP
                    </span>
                  </div>
                </div>

                {/* In stock countdown */}
                <div className="bg-surface-container px-space-sm py-2 rounded-DEFAULT flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">
                    Batch 03 Allocation
                  </span>
                  <span className="text-primary-fixed font-metric-val text-label-caps font-bold">
                    142 OF 500 REMAINING
                  </span>
                </div>

                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary-fixed h-full w-[72%]"></div>
                </div>

                <button
                  onClick={onPreOrder}
                  className="w-full h-12 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim hover:text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-semibold rounded-DEFAULT flex items-center justify-center gap-space-xs transition-colors shadow-lg mt-space-xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  Pre-Order Now — Save $50
                </button>

                <div className="flex items-center justify-center gap-space-md pt-space-xs text-outline font-label-sm text-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span> 256-Bit SSL Checkout
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span> Global DHL Express
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
