import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBatteryLifeHours,
  formatDeltaTime,
  getPowerZone,
  formatDistance,
  calculateCartTotal,
} from './telemetry.ts';

test('calculateBatteryLifeHours calculates full sunlight runtime around 35 hours', () => {
  const runtime = calculateBatteryLifeHours(100, 22, 0);
  assert.equal(runtime, 35.0);
});

test('calculateBatteryLifeHours reduces life under cold temps and high sensor count', () => {
  const runtime = calculateBatteryLifeHours(20, -5, 3);
  // Backlight penalty: ~3.36h, cold penalty: ~5.25h, sensors: 2.7h -> runtime should be ~23-24h
  assert.ok(runtime < 27.0);
  assert.ok(runtime >= 12.0);
});

test('formatDeltaTime formats positive and negative deltas correctly', () => {
  assert.equal(formatDeltaTime(4), 'PR +0:04s');
  assert.equal(formatDeltaTime(-2), 'PR -0:02s');
  assert.equal(formatDeltaTime(65), 'PR +1:05s');
  assert.equal(formatDeltaTime(0), 'PR +0:00s');
});

test('getPowerZone classifies 250W at 280W FTP into Threshold or Tempo', () => {
  // 250 / 280 = 89.2% -> Tempo (75-90%)
  const zoneTempo = getPowerZone(250, 280);
  assert.equal(zoneTempo.name, 'Tempo');
  assert.equal(zoneTempo.zone, 3);

  // 300 / 280 = 107.1% -> VO2 Max
  const zoneVO2 = getPowerZone(300, 280);
  assert.equal(zoneVO2.name, 'VO2 Max');
  assert.equal(zoneVO2.zone, 5);
});

test('formatDistance converts small distance to meters and large to KM', () => {
  const d1 = formatDistance(120);
  assert.equal(d1.value, 120);
  assert.equal(d1.unit, 'METERS');

  const d2 = formatDistance(3400);
  assert.equal(d2.value, '3.4');
  assert.equal(d2.unit, 'KM');
});

test('calculateCartTotal applies discounts, savings, and free shipping threshold', () => {
  const result = calculateCartTotal(
    [{ price: 179, originalPrice: 229, quantity: 1 }],
    0,
    15
  );
  assert.equal(result.subtotal, 179);
  assert.equal(result.savings, 50); // $229 MSRP - $179 sale price
  assert.equal(result.discount, 0);
  assert.equal(result.shipping, 0); // over $150
  assert.equal(result.total, 179);
});
