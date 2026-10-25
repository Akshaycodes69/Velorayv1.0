import { ProductItem, RouteData } from '../types.ts';

export const VELORAY_LOGO =
  'https://lh3.googleusercontent.com/aida/AEtjO1W3DamihwyF86jzpMCgYlOqs_Aps38L1IdTKGIl1ge1VBkMX6OKKT73FPhNz8v3B601EEj-H-Ga98XfbilORx4nhbJay4drKNuARO8i0xvWfGQzYKOqCYw-mgPgmsFeQ2uaRElMfbiLKI3YXR-LKLCpnzvfgcSSiKOv_7Rzc-fPBBFQHh2YJok1_SF4Tc75JFCOaCfHBa9aaocd4AxhUyPHzYUqy7RYZpbVR6gmQ0Sw1zV5uybo5roPUpCl';

export const USER_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBM2nHPNcWXWxHCbIacuh4WDjcGr1_oG8yXz9qg0KFHI9Mqnk9bfTu9prRMBZ53YaT_G1dj-coKC83Xclx_-w772-M7T3R4z4BNOxGPJ8WIlB8PSSmmYslby05r19kyK6pIXUH9Rpa9HiHCsvRW8BKKSDbNrutqEkfz6i_F9LZeaczay0Sp0v4ZwHNkQagwg8LvWSWj1GVU1oW_13ASX3Wj_JcHyRSKkD9xWY_vNLv_EVWWi8RojeAdfw';

export const GRAVEL_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDWxC8gJePKRmpFKB5K1QSU9jjub-G-n5GbRIjPbkJhvP0Gme9EpJ2PzTFzy8mFf_QrzODt2XU_SAht1KZuGz2FBphiqznCRhW24sdF5Npg3XoauAxth1f3bqrqRSHHiE6VmULSDsOWOi5n5sTZ-wfah4vlBo9_j6bMLQNC4q3SIoOiLpf10r7YiVP5_vKhQ5YJShZrTy3oAe7P9ShCxxiEcWGO2kUdL2JmC8xRvAXAo_Uw0egaCFXWww';

export const URBAN_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCyZJZZglDPtmjSI8PckjKEGp9WxCEgpfJbz-LyYvHsQsqYCFTKmLqLgXve0IvPlBw7WoSwcfQNpstIIG1zblCAcngF0Cbfv33DLYD-a50jzhQB5lTGNYtCoU9vJGaWKDfFaskEgZfmmdN1Xdjr5BGSg8D5NUERsfnCq6QrDv8fsQdmhvrZU36imRxpWmLm-mbrFycng8_k7oGPvIHG1wyTZRSD93d5Xgzj4Dpfq1yUl07Wwlt0ZfzZ1Q';

export const ALPINE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUVk354SYmmikDXUy5A0D7XlKELh5yOYYzLZf07q1IEH6xt33P_Tdy7EwoxVQuq8SPvLS9Qmav5RFFFk8DZgwe_BXEmZtNcNCZUuqvhgcnLsZ-EPwJOZ7CxqgHExfQQEj0WfydYIT7rmfMpK-HaQVs-aQs1T5Y5FvFFfjXAZMnTyQoSZfuitvYdLY1Xwx0cR-PZJMJLsRMMqpQDenL2ZwubXavFSroKgrnPp8Bt_kvaxpO2MR8aDQ9NA';

export const SAMPLE_ROUTES: RouteData[] = [
  {
    id: 'route-skyline',
    name: 'Skyline Ridge & Coast Descent',
    location: 'California Coastal Range',
    distanceKm: 64.2,
    elevGainM: 1420,
    estDuration: '2h 18m',
    terrain: 'Alpine Road',
    turns: [
      { id: 1, instruction: 'Sharp right onto Skyline Blvd', distanceMeters: 120, icon: 'turn_sharp_right', road: 'Skyline Blvd // Crest' },
      { id: 2, instruction: 'Slight left onto Page Mill Rd', distanceMeters: 650, icon: 'turn_slight_left', road: 'Page Mill Rd // Switchback 3' },
      { id: 3, instruction: 'Continue straight through intersection', distanceMeters: 1800, icon: 'straight', road: 'Alpine Rd Ridge' },
      { id: 4, instruction: 'Hairpin right downhill', distanceMeters: 400, icon: 'u_turn_right', road: 'Pescadero Creek Canyon' },
    ],
    segments: [
      { name: 'Skyline Sprint KOM', lengthKm: 2.1, prDeltaSeconds: 4, avgGradePct: 4.8 },
      { name: 'Page Mill Wall', lengthKm: 4.6, prDeltaSeconds: -7, avgGradePct: 9.4 },
    ],
  },
  {
    id: 'route-flint-hills',
    name: 'Flint Hills Unbound 350',
    location: 'Emporia, Kansas',
    distanceKm: 348.0,
    elevGainM: 3200,
    estDuration: '14h 40m',
    terrain: 'Gravel',
    turns: [
      { id: 1, instruction: 'Bear left onto Cattle Range Track', distanceMeters: 85, icon: 'turn_slight_left', road: 'Gravel Section 08 // Mile 142' },
      { id: 2, instruction: 'River ford crossing ahead', distanceMeters: 450, icon: 'water_drop', road: 'Cottonwood River Cross' },
      { id: 3, instruction: 'Turn right at fence line', distanceMeters: 1200, icon: 'turn_right', road: 'Drover Road Grid' },
    ],
    segments: [
      { name: 'Little Bighorn Climb', lengthKm: 3.4, prDeltaSeconds: 12, avgGradePct: 6.2 },
    ],
  },
  {
    id: 'route-stelvio',
    name: 'Passo dello Stelvio Cima Coppi',
    location: 'South Tyrol, Italy',
    distanceKm: 24.3,
    elevGainM: 1848,
    estDuration: '1h 55m',
    terrain: 'Alpine Road',
    turns: [
      { id: 1, instruction: 'Hairpin 48 left switchback', distanceMeters: 75, icon: 'turn_left', road: 'Tornante 48 // 2,150m ASL' },
      { id: 2, instruction: 'Hairpin 47 right switchback', distanceMeters: 180, icon: 'turn_right', road: 'Tornante 47 // 2,190m ASL' },
      { id: 3, instruction: 'Summit pass crest straight', distanceMeters: 920, icon: 'straight', road: 'Passo Stelvio Passhöhe' },
    ],
    segments: [
      { name: 'Stelvio Final 10 Switchbacks', lengthKm: 6.8, prDeltaSeconds: -14, avgGradePct: 8.5 },
    ],
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'veloray-core-01',
    name: 'VELORAY Core 01 Kit',
    subtitle: 'Machined Alloy Out-Front Mount + Computer + Magnetic Dock',
    price: 179,
    originalPrice: 229,
    image: GRAVEL_IMAGE,
    badge: 'BATCH 03 PRE-ORDER • SAVE $50',
    features: [
      'Circular Transflective MIP Display (240x240)',
      '35h Battery Autonomy in Sunlight Mode',
      'IP68 Submersion & Dust Proofing',
      'CNC 6061-T6 Machined Out-Front Mount (22.2 - 31.8mm)',
      'USB-C Magnetic Pogo Quick-Charge Dock',
      '2-Year Crash Replacement Shield included',
    ],
    inStockRemaining: 142,
    type: 'core',
  },
  {
    id: 'veloray-pro-aero-bundle',
    name: 'VELORAY Pro Aero Bundle',
    subtitle: 'Core 01 + Dual ANT+/BLE Heart Rate Strap + Speed/Cadence Pods',
    price: 249,
    originalPrice: 319,
    image: ALPINE_IMAGE,
    badge: 'MOST POPULAR FOR RACERS',
    features: [
      'Everything in VELORAY Core 01 Kit',
      'Pro Precision Dual ANT+ / BLE 5.3 Heart Rate Chest Strap',
      '2x Micro Aero Speed & Cadence Wheel/Crank Hub Pods',
      'Real-time Coggan 7-Zone Power & Cardiac drift telemetry',
      'Aero Drop-Bar Direct Cockpit Stem Mount',
    ],
    inStockRemaining: 88,
    type: 'bundle',
  },
  {
    id: 'veloray-gravel-explorer-bundle',
    name: 'Ultra Gravel Explorer Bundle',
    subtitle: 'Core 01 + Dual Mounts + High-Impact Armor + 2x Cables',
    price: 289,
    originalPrice: 369,
    image: GRAVEL_IMAGE,
    badge: 'EXPEDITION & BIKEPACKING',
    features: [
      'Everything in VELORAY Core 01 Kit',
      'Extra Top-Tube / Stem Bolt Solid Mount',
      'Shock-Absorbing Silicone High-Impact Armor Jacket',
      '2x Magnetic Pogo USB-C Braided Charge Cables',
      'Offline 64MB Cache for untracked trail waypoints',
    ],
    inStockRemaining: 54,
    type: 'bundle',
  },
  {
    id: 'accessory-alloy-mount',
    name: 'CNC Machined Out-Front Alloy Mount',
    subtitle: 'Anodized 6061-T6 Aluminum with rubberized clamp shims',
    price: 39,
    originalPrice: 49,
    image: ALPINE_IMAGE,
    features: [
      'Universal 31.8mm and 22.2mm clamp inserts',
      'Aerodynamic flush cockpit positioning',
      'Stainless steel torx hardware',
    ],
    type: 'accessory',
  },
  {
    id: 'accessory-hr-strap',
    name: 'ANT+ / BLE 5.3 Heart Rate Strap',
    subtitle: 'Ultra-thin washable elastic strap with medical-grade ECG pads',
    price: 59,
    originalPrice: 69,
    image: URBAN_IMAGE,
    features: [
      'Dual broadcast ANT+ and Bluetooth 5.3 Low Energy',
      '1,000h replaceable CR2032 battery life',
      'Sub-beat HRV precision telemetry',
    ],
    type: 'accessory',
  },
];
