import React, { useState, useEffect } from 'react';
import { CockpitDisplayMode } from '../types.ts';
import { formatDeltaTime, getPowerZone, POWER_ZONES } from '../utils/telemetry.ts';

interface CircularCockpitDisplayProps {
  initialMode?: CockpitDisplayMode;
  interactiveControls?: boolean;
}

export const CircularCockpitDisplay: React.FC<CircularCockpitDisplayProps> = ({
  initialMode = 'turn-by-turn',
  interactiveControls = true,
}) => {
  const [mode, setMode] = useState<CockpitDisplayMode>(initialMode);
  const [countdown, setCountdown] = useState<number>(120);
  const [speed, setSpeed] = useState<number>(28.4);
  const [elevGain, setElevGain] = useState<number>(340);
  const [watts, setWatts] = useState<number>(295);
  const [cadence, setCadence] = useState<number>(92);
  const [heartRate, setHeartRate] = useState<number>(162);
  const [compassHeading, setCompassHeading] = useState<number>(284);
  const [ambientSunlight, setAmbientSunlight] = useState<number>(85); // 0 to 100%
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Turn-by-turn simulated sequence
  const turns = [
    { distance: 120, instruction: 'turn_sharp_right', road: 'Skyline Blvd // Crest' },
    { distance: 85, instruction: 'turn_slight_left', road: 'Page Mill Rd // Switchback' },
    { distance: 450, instruction: 'straight', road: 'Alpine Rd Ridge' },
    { distance: 30, instruction: 'u_turn_right', road: 'Summit Vista Fork' },
  ];
  const [turnIndex, setTurnIndex] = useState<number>(0);

  // Active power zone
  const powerZone = getPowerZone(watts, 280);

  // Auto decrement distance simulation
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 10) {
          // Advance turn
          setTurnIndex((t) => (t + 1) % turns.length);
          return turns[(turnIndex + 1) % turns.length].distance;
        }
        return prev - 1;
      });

      // Subtle natural fluctuations in live cycling metrics
      setSpeed((s) => Number((28.0 + (Math.sin(Date.now() / 2000) * 1.8)).toFixed(1)));
      setWatts((w) => Math.round(290 + Math.sin(Date.now() / 1500) * 25));
      setCompassHeading((h) => (h + 0.2) % 360);
    }, 900);

    return () => clearInterval(interval);
  }, [isSimulating, turnIndex]);

  const cycleMode = () => {
    const modes: CockpitDisplayMode[] = ['turn-by-turn', 'compass', 'segment', 'telemetry'];
    const nextIdx = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[nextIdx]);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Outer Cockpit Container */}
      <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
        {/* Background Cockpit Mount Graphic (Matte Anodized Base) */}
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-8 bg-surface-container-high rounded-full opacity-60"></div>
        <div className="absolute inset-0 rounded-full bg-surface-container-lowest shadow-2xl flex items-center justify-center p-3 border border-outline-variant/30">
          
          {/* Machined Alloy Bezel with Knurled Texture Impression */}
          <div className="w-full h-full rounded-full bg-surface-container-high p-3 flex items-center justify-center relative overflow-hidden ring-1 ring-surface-bright shadow-inner">
            
            {/* Compass Tick Ring */}
            <svg
              className="absolute inset-0 w-full h-full text-outline-variant opacity-40 animate-[spin_120s_linear_infinite] pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray="1 3" strokeWidth="1.5"></circle>
              <circle cx="50" cy="50" fill="none" r="44" stroke="currentColor" strokeWidth="0.5"></circle>
            </svg>

            {/* Transflective High-Contrast Round Screen Canvas */}
            <div
              className={`w-full h-full rounded-full p-6 flex flex-col justify-between items-center text-center relative z-10 transition-colors duration-300 ${
                ambientSunlight > 70
                  ? 'bg-[#08090a] text-white' // High transflective ambient contrast
                  : 'bg-surface-container-lowest text-on-surface'
              }`}
            >
              {/* Screen Top Header: GPS & Battery */}
              <div className="w-full flex justify-between items-center px-2">
                <div className="flex items-center gap-1 text-primary-fixed">
                  <span className="material-symbols-outlined text-[14px]">satellite_alt</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">GPS 3D FIX</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface">
                  <span className="font-label-sm text-label-sm">94%</span>
                  <span className="material-symbols-outlined text-[14px] text-primary-fixed">battery_full</span>
                </div>
              </div>

              {/* Dynamic Mode Screen Contents */}
              {mode === 'turn-by-turn' && (
                <div className="flex flex-col items-center justify-center my-auto animate-fadeIn">
                  {/* Neon Navigation Arrow */}
                  <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-1 shadow-lg transform -rotate-12 transition-transform duration-500 hover:rotate-0">
                    <span className="material-symbols-outlined text-[42px] font-bold">
                      {turns[turnIndex].instruction}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-metric-val text-metric-val text-primary tracking-tight font-bold">
                      {countdown}
                    </span>
                    <span className="font-label-caps text-label-caps uppercase text-primary-fixed font-bold">
                      METERS
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface font-semibold max-w-[210px] truncate mt-1">
                    {turns[turnIndex].road}
                  </span>
                </div>
              )}

              {mode === 'compass' && (
                <div className="flex flex-col items-center justify-center my-auto animate-fadeIn">
                  {/* Compass Rose */}
                  <div className="relative w-20 h-20 rounded-full border border-secondary-fixed/40 flex items-center justify-center mb-1">
                    <span className="absolute top-1 text-[10px] font-bold text-secondary-fixed">N</span>
                    <span className="absolute bottom-1 text-[10px] font-bold text-outline">S</span>
                    <span className="absolute left-1 text-[10px] font-bold text-outline">W</span>
                    <span className="absolute right-1 text-[10px] font-bold text-outline">E</span>
                    <div
                      className="w-12 h-12 flex items-center justify-center transition-transform duration-300 text-secondary-fixed"
                      style={{ transform: `rotate(${compassHeading}deg)` }}
                    >
                      <span className="material-symbols-outlined text-[36px]">navigation</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-metric-val text-metric-val text-primary font-bold">
                      {Math.round(compassHeading)}°
                    </span>
                    <span className="font-label-caps text-label-caps uppercase text-secondary-fixed font-bold">
                      WNW
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface font-semibold max-w-[200px] truncate mt-1">
                    Waypoint: Ridge Pass (2.4 KM)
                  </span>
                </div>
              )}

              {mode === 'segment' && (
                <div className="flex flex-col items-center justify-center my-auto animate-fadeIn w-full px-2">
                  <div className="flex items-center gap-1 text-secondary-fixed mb-1">
                    <span className="material-symbols-outlined text-[16px]">flag</span>
                    <span className="font-label-caps text-label-caps uppercase tracking-wider">STRAVA LIVE SEGMENT</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase truncate max-w-[190px]">
                    Skyline Sprint KOM
                  </span>
                  <div className="my-1.5 px-3 py-1 bg-surface-container rounded-DEFAULT border border-primary-fixed/40">
                    <span className="font-metric-val text-headline-sm text-primary-fixed font-bold">
                      {formatDeltaTime(4)}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-surface-container-high rounded-full overflow-hidden flex items-center px-0.5">
                    <div className="bg-primary-fixed h-2.5 rounded-full w-[65%]"></div>
                  </div>
                  <div className="flex justify-between w-full text-[10px] text-outline mt-1 font-metric-val">
                    <span>1.4 / 2.1 KM</span>
                    <span>+4.8% GRADE</span>
                  </div>
                </div>
              )}

              {mode === 'telemetry' && (
                <div className="flex flex-col items-center justify-center my-auto animate-fadeIn w-full px-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] uppercase text-outline font-label-caps">3S POWER</span>
                      <span className="font-metric-val text-headline-sm text-primary font-bold leading-none">
                        {watts} <span className="text-[10px] text-on-surface-variant font-normal">W</span>
                      </span>
                    </div>
                    <div className="h-6 w-px bg-outline-variant/50"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] uppercase text-outline font-label-caps">CADENCE</span>
                      <span className="font-metric-val text-headline-sm text-primary font-bold leading-none">
                        {cadence} <span className="text-[10px] text-on-surface-variant font-normal">RPM</span>
                      </span>
                    </div>
                    <div className="h-6 w-px bg-outline-variant/50"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] uppercase text-outline font-label-caps">HEART RATE</span>
                      <span className="font-metric-val text-headline-sm text-error font-bold leading-none">
                        {heartRate} <span className="text-[10px] text-on-surface-variant font-normal">BPM</span>
                      </span>
                    </div>
                  </div>

                  {/* 7-Segment Coggan Power Zone Meter */}
                  <div className="w-full mt-2">
                    <div className="flex items-center justify-between text-[9px] font-label-caps mb-1">
                      <span className="text-primary-fixed font-bold uppercase">{powerZone.name}</span>
                      <span className="text-outline">ZONE {powerZone.zone} / 7</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 w-full h-2">
                      {POWER_ZONES.map((pz) => (
                        <div
                          key={pz.zone}
                          className="h-full rounded-[1px] transition-all duration-300"
                          style={{
                            backgroundColor: pz.zone <= powerZone.zone ? pz.color : '#282a2d',
                            opacity: pz.zone <= powerZone.zone ? 1 : 0.35,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Screen Bottom Metrics: Speed & Elevation */}
              <div className="w-full grid grid-cols-2 gap-2 pt-2 bg-surface-container-low rounded-xl px-3 py-1.5 border border-outline-variant/20">
                <div className="flex flex-col items-center">
                  <span className="font-label-sm text-label-sm text-outline uppercase">LIVE SPEED</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">{speed}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">KM/H</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-label-sm text-label-sm text-outline uppercase">ELEV GAIN</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                      +{elevGain}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Telemetry Status Badge */}
        <div className="absolute -bottom-4 right-2 bg-surface-container-high px-space-sm py-1 rounded-DEFAULT shadow-md flex items-center gap-space-xs text-primary-fixed border border-outline-variant/30 text-xs">
          <span className="material-symbols-outlined text-[16px]">sensors</span>
          <span className="font-label-caps text-label-caps uppercase">
            Auto Ambient Backlight: {ambientSunlight}%
          </span>
        </div>
      </div>

      {/* Interactive Display Controls */}
      {interactiveControls && (
        <div className="mt-8 flex flex-col items-center gap-2 bg-surface-container-low p-3 rounded-DEFAULT border border-outline-variant/30 max-w-lg w-full">
          {/* Mode Selector Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
            {[
              { id: 'turn-by-turn', label: 'Turn-by-Turn', icon: 'navigation' },
              { id: 'compass', label: 'Compass 284°', icon: 'explore' },
              { id: 'segment', label: 'Strava KOM', icon: 'flag' },
              { id: 'telemetry', label: '7-Zone Power', icon: 'electric_meter' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id as CockpitDisplayMode)}
                className={`px-3 py-1.5 rounded-DEFAULT text-xs font-label-caps uppercase flex items-center gap-1 cursor-pointer transition-colors border ${
                  mode === m.id
                    ? 'bg-primary-container text-on-primary-container border-primary-container font-bold shadow'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant border-outline-variant/20'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          {/* Simulation & Turn advancement */}
          <div className="flex items-center gap-2 pt-1 border-t border-outline-variant/20 w-full justify-between text-xs">
            <span className="text-[10px] text-outline font-label-caps uppercase">Telemetry Stream:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className="h-7 px-2.5 bg-surface-container hover:bg-surface-container-high text-primary-fixed font-label-caps text-[10px] uppercase rounded flex items-center gap-1 cursor-pointer border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[13px]">
                  {isSimulating ? 'pause' : 'play_arrow'}
                </span>
                {isSimulating ? 'Active' : 'Paused'}
              </button>

              <button
                onClick={() => {
                  const nextIndex = (turnIndex + 1) % turns.length;
                  setTurnIndex(nextIndex);
                  setCountdown(turns[nextIndex].distance);
                }}
                className="h-7 px-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-[10px] uppercase rounded flex items-center gap-1 cursor-pointer border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[13px]">skip_next</span>
                Next Cue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
