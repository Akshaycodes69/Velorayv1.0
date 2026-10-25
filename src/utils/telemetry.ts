export interface PowerZoneInfo {
  zone: number;
  name: string;
  minPercent: number;
  maxPercent: number;
  color: string;
}

export const POWER_ZONES: PowerZoneInfo[] = [
  { zone: 1, name: 'Active Recovery', minPercent: 0, maxPercent: 55, color: '#9ca3af' },
  { zone: 2, name: 'Endurance', minPercent: 55, maxPercent: 75, color: '#38bdf8' },
  { zone: 3, name: 'Tempo', minPercent: 75, maxPercent: 90, color: '#34d399' },
  { zone: 4, name: 'Threshold', minPercent: 90, maxPercent: 105, color: '#caf300' },
  { zone: 5, name: 'VO2 Max', minPercent: 105, maxPercent: 120, color: '#fbbf24' },
  { zone: 6, name: 'Anaerobic', minPercent: 120, maxPercent: 150, color: '#f97316' },
  { zone: 7, name: 'Neuromuscular', minPercent: 150, maxPercent: 300, color: '#ef4444' },
];

/**
 * Calculates estimated battery endurance in hours based on ambient backlight, operating temperature, and paired sensors.
 */
export function calculateBatteryLifeHours(
  ambientBrightnessPct: number,
  temperatureCelsius: number,
  sensorsConnected: number
): number {
  let baseHours = 35.0;

  // Transflective MIP screen uses zero backlight in full sun (100% ambient)
  // When dark (0% ambient), backlight activates to 80-100%, consuming ~12% more energy
  const backlightPenalty = ((100 - ambientBrightnessPct) / 100) * 4.2;

  // Cold temperature impact (< 10°C reduces lithium ion efficiency)
  let tempPenalty = 0;
  if (temperatureCelsius < 10) {
    tempPenalty = ((10 - temperatureCelsius) / 10) * 3.5;
  } else if (temperatureCelsius > 40) {
    tempPenalty = 1.0;
  }

  // Sensor BLE packet processing overhead (~0.9 hours per paired sensor)
  const sensorPenalty = Math.max(0, sensorsConnected) * 0.9;

  const total = Math.max(12.0, baseHours - backlightPenalty - tempPenalty - sensorPenalty);
  return Number(total.toFixed(1));
}

/**
 * Formats a live segment delta in seconds into a racer string like PR +0:04s or PR -0:02s
 */
export function formatDeltaTime(deltaSeconds: number): string {
  const sign = deltaSeconds >= 0 ? '+' : '-';
  const abs = Math.abs(deltaSeconds);
  const mins = Math.floor(abs / 60);
  const secs = Math.floor(abs % 60);
  const formattedSecs = secs < 10 ? `0${secs}` : `${secs}`;
  return `PR ${sign}${mins}:${formattedSecs}s`;
}

/**
 * Classifies power output into Coggan 7-zone system relative to FTP (Functional Threshold Power)
 */
export function getPowerZone(watts: number, ftp: number = 280): PowerZoneInfo {
  if (ftp <= 0) ftp = 280;
  const pct = (watts / ftp) * 100;

  for (let i = POWER_ZONES.length - 1; i >= 0; i--) {
    if (pct >= POWER_ZONES[i].minPercent) {
      return POWER_ZONES[i];
    }
  }
  return POWER_ZONES[0];
}

/**
 * Formats distance into meters or kilometers
 */
export function formatDistance(meters: number): { value: number | string; unit: string } {
  if (meters >= 1000) {
    return {
      value: (meters / 1000).toFixed(1),
      unit: 'KM',
    };
  }
  return {
    value: Math.round(meters),
    unit: 'METERS',
  };
}

/**
 * Computes shopping cart totals with promotion discount, MSRP savings, and shipping threshold
 */
export function calculateCartTotal(
  items: Array<{ price: number; originalPrice?: number; quantity: number }>,
  discount: number = 0,
  shippingRate: number = 0
): { subtotal: number; discount: number; savings: number; shipping: number; total: number } {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const msrpTotal = items.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0);
  const savings = Math.max(0, msrpTotal - subtotal);
  const effectiveDiscount = Math.min(subtotal, Math.max(0, discount));
  const shipping = subtotal > 150 ? 0 : shippingRate;
  const total = Math.max(0, subtotal - effectiveDiscount + shipping);

  return {
    subtotal,
    discount: effectiveDiscount,
    savings,
    shipping,
    total,
  };
}
