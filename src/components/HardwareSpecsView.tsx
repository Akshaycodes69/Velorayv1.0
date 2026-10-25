import React, { useState } from 'react';
import { calculateBatteryLifeHours } from '../utils/telemetry.ts';

export const HardwareSpecsView: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isSubmerged, setIsSubmerged] = useState<boolean>(false);
  
  // Battery Calculator State
  const [ambientSun, setAmbientSun] = useState<number>(90);
  const [temperature, setTemperature] = useState<number>(22);
  const [pairedSensors, setPairedSensors] = useState<{ [key: string]: boolean }>({
    heartRate: true,
    cadence: true,
    powerMeter: false,
    radar: false,
  });

  const sensorCount = Object.values(pairedSensors).filter(Boolean).length;
  const calculatedHours = calculateBatteryLifeHours(ambientSun, temperature, sensorCount);

  const layers = [
    {
      title: 'Anti-Glare Sapphire Crystal',
      material: 'Synthetic Monocrystalline Sapphire',
      spec: '9H Mohs Hardness Scale',
      description: 'Diamond-hard surface impervious to flying gravel chatter, coarse mud sprays, and wire-brush cleaning. Treated with dual-sided anti-reflective multi-coating.',
    },
    {
      title: '240x240 Circular MIP Display',
      material: 'Transflective Memory-in-Pixel',
      spec: '14:1 Ambient Sunlight Contrast',
      description: 'Static image memory built into each individual pixel cell. Requires zero power to hold display state, drawing power only when pixels flip for turn countdowns.',
    },
    {
      title: 'Multi-GNSS Dual-Band Receiver',
      material: 'All-Constellation Patch Antenna',
      spec: '<0.3s Hardware Position Lock',
      description: 'Concurrent tracking of GPS, GLONASS, Galileo, and BeiDou. 10Hz positional update rate ensures zero delay when entering tree-canopied switchbacks.',
    },
    {
      title: 'Dual ERM Haptic Motors',
      material: 'Eccentric Rotating Mass Actuators',
      spec: '4.8G Instant Haptic Impulse',
      description: 'Tactile directional pulse alerts directly through your handlebar stem. Distinct haptic vibrations for left turns, right turns, off-course alerts, and Strava segments.',
    },
    {
      title: 'Solid-State 900mAh Endurance Core',
      material: 'Lithium-Polymer High-Density Cell',
      spec: '35h Continuous Navigation',
      description: 'Potted in vibration-dampening polyurethane resin to prevent internal solder fatigue from intense cobblestone and root-strewn singletrack descents.',
    },
    {
      title: 'CNC 6061-T6 Anodized Shell',
      material: 'Aerospace Grade Aluminum',
      spec: 'IP68 Sealed & Chamfered Edge',
      description: 'Precision milled from a solid billet of aerospace alloy with micro-knurled glove grips and standard quarter-turn locking bayonet compatible with aero mounts.',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-margin-desktop py-space-xl bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-primary-fixed border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              Tactical Hardware Architecture
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary">
            Engineered Down to the Micrometer
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A zero-compromise mechanical design crafted from solid 6061-T6 alloy, sapphire glass, and transflective
            optics. Explore the layered architecture, live battery runtime calculator, and environmental test chambers.
          </p>
        </div>

        {/* Section 1: Interactive Teardown Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center bg-surface-container-low p-space-lg rounded-DEFAULT border border-outline-variant/30">
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="font-label-caps text-outline uppercase tracking-wider">Structural Teardown</span>
            <h2 className="font-headline-md text-headline-md text-primary">
              6-Layer Armored Construction
            </h2>
            <p className="text-sm text-on-surface-variant mb-3">
              Click through the internal hardware assembly to inspect precision optical and telemetry modules.
            </p>

            <div className="flex flex-col gap-2">
              {layers.map((layer, idx) => (
                <button
                  key={layer.title}
                  onClick={() => setActiveLayer(idx)}
                  className={`text-left p-3 rounded-DEFAULT transition-colors flex items-center justify-between cursor-pointer border ${
                    activeLayer === idx
                      ? 'bg-surface-container-high border-primary-fixed text-primary'
                      : 'bg-surface-container hover:bg-surface-container-high/60 border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-metric-val text-xs text-primary-fixed font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold">{layer.title}</span>
                  </div>
                  <span className="material-symbols-outlined text-sm">
                    {activeLayer === idx ? 'radio_button_checked' : 'chevron_right'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-6 rounded-DEFAULT border border-outline-variant/40 flex flex-col items-center justify-center min-h-[380px]">
            <div className="w-full flex justify-between items-center pb-3 border-b border-outline-variant/20 mb-4">
              <span className="font-label-caps text-primary-fixed uppercase tracking-widest">
                LAYER 0{activeLayer + 1} // {layers[activeLayer].material}
              </span>
              <span className="font-metric-val text-xs bg-surface-container px-2 py-0.5 rounded text-secondary-fixed">
                {layers[activeLayer].spec}
              </span>
            </div>

            {/* Circular Graphic Rendering */}
            <div className="relative w-56 h-56 rounded-full border-4 border-dashed border-primary-fixed/40 flex items-center justify-center p-4 my-2">
              <div className="w-full h-full rounded-full bg-surface-container flex flex-col items-center justify-center p-4 text-center border-2 border-outline-variant/60 shadow-2xl">
                <span className="material-symbols-outlined text-[48px] text-primary-fixed mb-1">
                  {activeLayer === 0 && 'diamond'}
                  {activeLayer === 1 && 'visibility'}
                  {activeLayer === 2 && 'satellite_alt'}
                  {activeLayer === 3 && 'vibration'}
                  {activeLayer === 4 && 'battery_charging_full'}
                  {activeLayer === 5 && 'hardware'}
                </span>
                <span className="font-headline-sm text-sm text-primary font-bold">
                  {layers[activeLayer].title}
                </span>
              </div>
            </div>

            <div className="mt-4 text-center max-w-md">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {layers[activeLayer].description}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Interactive Battery Runtime Calculator & IP68 Chamber */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Battery Endurance Simulator */}
          <div className="bg-surface-container p-space-lg rounded-DEFAULT border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">electric_meter</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">
                    Battery Endurance Calculator
                  </span>
                </div>
                <span className="font-metric-val text-xs text-outline">DYNAMIC ALGORITHM</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Real-World Autonomy Predictor
              </h3>
              <p className="text-xs text-on-surface-variant mb-4">
                Calculate projected battery performance based on real ride variables. Because the transflective display
                reflects ambient sunlight, brighter sun yields maximum battery efficiency.
              </p>

              {/* Slider 1: Ambient Sunlight */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-label-caps mb-1">
                  <span className="text-on-surface">Ambient Sunlight / Lux:</span>
                  <span className="text-primary-fixed font-bold">{ambientSun}% (Sunlight Mode)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ambientSun}
                  onChange={(e) => setAmbientSun(Number(e.target.value))}
                  className="w-full accent-primary-container cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-outline mt-0.5">
                  <span>Pitch Black (Backlight 100%)</span>
                  <span>Alpine Direct Sun (Backlight 0%)</span>
                </div>
              </div>

              {/* Slider 2: Operating Temperature */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-label-caps mb-1">
                  <span className="text-on-surface">Ambient Temperature:</span>
                  <span className="text-secondary-fixed font-bold">{temperature}°C</span>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="45"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-secondary-container cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-outline mt-0.5">
                  <span>-10°C (Winter Frost)</span>
                  <span>+22°C (Ideal)</span>
                  <span>+45°C (Desert Heat)</span>
                </div>
              </div>

              {/* Sensor Toggles */}
              <div className="mb-3">
                <span className="text-xs font-label-caps text-on-surface block mb-1.5">
                  Active BLE / ANT+ Sensors Paired:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2 bg-surface-container-low rounded cursor-pointer border border-outline-variant/20">
                    <input
                      type="checkbox"
                      checked={pairedSensors.heartRate}
                      onChange={(e) =>
                        setPairedSensors({ ...pairedSensors, heartRate: e.target.checked })
                      }
                      className="accent-primary-container"
                    />
                    <span>Heart Rate Strap</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-surface-container-low rounded cursor-pointer border border-outline-variant/20">
                    <input
                      type="checkbox"
                      checked={pairedSensors.cadence}
                      onChange={(e) =>
                        setPairedSensors({ ...pairedSensors, cadence: e.target.checked })
                      }
                      className="accent-primary-container"
                    />
                    <span>Cadence Sensor</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-surface-container-low rounded cursor-pointer border border-outline-variant/20">
                    <input
                      type="checkbox"
                      checked={pairedSensors.powerMeter}
                      onChange={(e) =>
                        setPairedSensors({ ...pairedSensors, powerMeter: e.target.checked })
                      }
                      className="accent-primary-container"
                    />
                    <span>Power Meter Cranks</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-surface-container-low rounded cursor-pointer border border-outline-variant/20">
                    <input
                      type="checkbox"
                      checked={pairedSensors.radar}
                      onChange={(e) =>
                        setPairedSensors({ ...pairedSensors, radar: e.target.checked })
                      }
                      className="accent-primary-container"
                    />
                    <span>Rear Varia Radar</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculated Output Result */}
            <div className="bg-surface-container-lowest p-4 rounded-DEFAULT border border-primary-fixed/40 flex items-center justify-between mt-3">
              <div className="flex flex-col">
                <span className="font-label-caps text-outline uppercase text-[10px]">
                  Projected Continuous Autonomy
                </span>
                <span className="text-xs text-on-surface">GPS Navigation &amp; Logging Active</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-metric-val text-3xl font-bold text-primary-fixed">
                  {calculatedHours}
                </span>
                <span className="font-label-caps text-primary-fixed uppercase font-bold text-xs">
                  HOURS
                </span>
              </div>
            </div>
          </div>

          {/* Section 2B: IP68 Water Submersion Chamber Simulator */}
          <div className="bg-surface-container p-space-lg rounded-DEFAULT border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-secondary-fixed">
                  <span className="material-symbols-outlined text-[20px]">water_drop</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">
                    IP68 Weatherproofing Chamber
                  </span>
                </div>
                <span className="font-metric-val text-xs text-outline">LAB SIMULATOR</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Torrential Rain &amp; River Ford Proof
              </h3>
              <p className="text-xs text-on-surface-variant mb-4">
                Smartphones suffer from ghost touches and screen freezes the second moisture hits the capacitive glass.
                VELORAY is sealed with O-rings and actuated via tactile mechanical dials.
              </p>

              {/* Interactive Chamber Graphic */}
              <div
                className={`w-full h-44 rounded-DEFAULT flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 border ${
                  isSubmerged
                    ? 'bg-blue-950/40 border-secondary-fixed shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-surface-container-lowest border-outline-variant/30'
                }`}
              >
                {isSubmerged && (
                  <>
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none animate-pulse"></div>
                    <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-secondary-fixed/40 animate-ping"></div>
                    <div className="absolute top-10 right-8 w-2 h-2 rounded-full bg-secondary-fixed/30 animate-bounce"></div>
                  </>
                )}

                <div className="w-20 h-20 rounded-full bg-surface-container-high border-2 border-primary-fixed flex flex-col items-center justify-center p-2 relative z-10">
                  <span className="material-symbols-outlined text-primary-fixed text-2xl">
                    {isSubmerged ? 'waves' : 'turn_sharp_right'}
                  </span>
                  <span className="text-[10px] font-metric-val font-bold text-white mt-0.5">
                    {isSubmerged ? '100% OK' : '120M'}
                  </span>
                </div>

                <span className="mt-2 font-label-caps text-xs uppercase font-bold tracking-wider relative z-10 text-on-surface">
                  {isSubmerged ? 'SUBMERGED: 1.5M DEPTH (PRESSURE SEALED)' : 'CHAMBER DRY (AMBIENT ATMOSPHERE)'}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={() => setIsSubmerged(!isSubmerged)}
                className={`w-full h-11 rounded-DEFAULT font-label-caps uppercase font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  isSubmerged
                    ? 'bg-secondary-fixed text-on-secondary-fixed'
                    : 'bg-surface-container-high hover:bg-surface-container-highest text-primary-fixed border border-secondary-fixed/40'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isSubmerged ? 'water_loss' : 'water'}
                </span>
                {isSubmerged ? 'Drain Water Chamber' : 'Test Submersion in 1.5m Water'}
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Detailed Technical Specifications Matrix */}
        <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT border border-outline-variant/30">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            VELORAY Core 01 Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
              <span className="font-label-caps text-outline block mb-1">PHYSICAL DIMENSIONS</span>
              <p className="font-headline-sm text-sm text-primary font-bold">48mm × 14.5mm</p>
              <p className="text-on-surface-variant mt-1">Weight: 42g (Chassis only) / 58g with alloy mount</p>
            </div>
            <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
              <span className="font-label-caps text-outline block mb-1">OPTICAL DISPLAY</span>
              <p className="font-headline-sm text-sm text-primary font-bold">1.2" Circular Transflective</p>
              <p className="text-on-surface-variant mt-1">240×240 MIP, 283 PPI, 14:1 Sunlight Contrast</p>
            </div>
            <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
              <span className="font-label-caps text-outline block mb-1">WIRELESS &amp; SENSORS</span>
              <p className="font-headline-sm text-sm text-primary font-bold">BLE 5.3 &amp; ANT+ Multi</p>
              <p className="text-on-surface-variant mt-1">All-Constellation GNSS, Barometer, 3-Axis Gyro</p>
            </div>
            <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
              <span className="font-label-caps text-outline block mb-1">INGRESS PROTECTION</span>
              <p className="font-headline-sm text-sm text-primary font-bold">IP68 / 15G Shockproof</p>
              <p className="text-on-surface-variant mt-1">Continuous submersion to 1.5m, -20°C to +55°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
