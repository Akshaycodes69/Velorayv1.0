---
name: Aerodynamic Precision
colors:
  surface: '#111316'
  surface-dim: '#111316'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#c5c9ac'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#8f9378'
  outline-variant: '#444932'
  surface-tint: '#b0d500'
  primary: '#ffffff'
  on-primary: '#2a3400'
  primary-container: '#caf300'
  on-primary-container: '#596c00'
  inverse-primary: '#536600'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffffff'
  on-tertiary: '#4c2700'
  tertiary-container: '#ffdcc1'
  on-tertiary-container: '#975300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#caf300'
  primary-fixed-dim: '#b0d500'
  on-primary-fixed: '#171e00'
  on-primary-fixed-variant: '#3e4c00'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb778'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#111316'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display-hero:
    fontFamily: JetBrains Mono
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  metric-val:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-tablet: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies high-velocity telemetry, ruggedized physical computing, and calculated performance. It serves endurance cyclists, competitive racers, and technical gravel riders navigating extreme light environments—from blistering direct sunlight on exposed mountain passes to pitch-black nighttime descents. 

The aesthetic is **Dark Aerodynamic Minimalism** blended with **Precision High-Contrast Performance Tech**. It eschews decorative whimsy in favor of tactical clarity, functional IP68 instrumentation, and ultra-legible real-time feedback. Surfaces mirror matte carbon fiber, textured rubberized grips, and anti-glare sapphire glass. Accents act purely as directional cues and critical telemetry thresholds.

## Colors

The palette is engineered around high luminance contrast on pitch-black surfaces to combat road vibrations and harsh glare.

- **Primary (`#D4FF00` - Volt Lime):** Used exclusively for high-priority telemetry, turn cues, real-time cadence targets, active recording states, and primary affirmative actions. It commands immediate optical priority.
- **Secondary (`#00F0FF` - Aero Cyan):** Reserved for spatial pathing, GPS breadcrumbs, elevation profiles, and live aerodynamic/wind vector metrics.
- **Tertiary (`#FF9100` - Amber Cadence):** Dedicated to critical warnings, cardiac heart-rate threshold shifts, grade alerts (>12%), and power zone drift.
- **Neutral (`#121417` - Deep Carbon / Asphalt):** The absolute grounding canvas. Derived neutral variants extend to `#08090A` (true OLED base), `#1C1F24` (surface container), and `#2B313A` (structural divisions and inactive telemetry borders).

## Typography

Typography functions as an analytical cockpit display:

- **JetBrains Mono** delivers monospaced certainty for all numeric values (speed, watts, cadence, grade, distance), ensuring data streams never jitter or shift horizontal containers during high-frequency telemetry updates.
- **Space Grotesk** is used for structural headlines, directional navigation headers, and modal alerts, imbuing a technical, machine-tooled posture.
- **Inter** provides neutral, effortless legibility for supplementary contextual text, settings configurations, and sensor pairing logs.
- All metric headers and hardware labels use uppercase treatment (`label-caps`) with expanded tracking for immediate identification in peripheral vision.

## Layout & Spacing

The layout philosophy follows a rigid, instrument-cluster grid. 

- **Grid Systems:** Telemetry displays utilize a modular 2-column or 4-quadrant layout on head units and mobile cockpit displays, ensuring that target fields can be operated via full-finger cycling gloves. The desktop companion portal utilizes a rigid 12-column fluid grid.
- **Rhythm:** Spacing follows an ultra-disciplined 4px base unit. Internal data cells favor compact inner padding (`space-sm` to `space-md`) paired with clean separations to maximize high-density metric real estate on compact displays.
- **Adaptive Reflow:** During active ride mode, layouts collapse non-essential secondary data into off-screen trays, pinning primary power/speed metrics in the upper 60% optical zone.

## Elevation & Depth

To preserve outdoor screen efficiency and maintain absolute high-contrast clarity, this system completely eliminates diffuse dropshadows and blurred translucent layers:

- **Tonal Layering:** Visual hierarchy is built through solid, stratified dark tiers:
  - Base canvas: `#08090A` (Deepest Void / OLED Off).
  - Telemetry container: `#121417` (Matte Carbon Base).
  - Raised interactables / Modals: `#1C1F24` (Machined Alloy Surface).
- **Low-Contrast Outlines & Hard Grid Strokes:** Modules are partitioned with hairline 1px structural borders (`#2B313A`). Focus and active states swap this hairline border for a razor-sharp, solid 1px or 2px `#D4FF00` edge.
- **Zero Atmospheric Blur:** No frosted glass or floating blurred drop shadows. Every visual component possesses concrete mechanical definition, reflecting hardware sealed against water and dust.

## Shapes

The physical silhouette reflects machined aerospace alloy and ruggedized polycarbonate bumpers:

- Corner radii are tightly controlled with Level 1 (`roundedness: 1` = `0.25rem` / 4px default). This prevents "toy-like" softening of the visual weight and preserves critical screen pixels on square and circular edge screens.
- Outer container frames and telemetry splitters use sharp, chamfered or 4px subtle radiuses. 
- Status chips and mode pills use a micro 2px radius, avoiding continuous spherical radii in favor of architectural, utilitarian precision.

## Components

### Buttons & Interactive Triggers
- **Primary Action (Record/Start):** Solid Volt Lime (`#D4FF00`) background with pure `#08090A` text, styled in `JetBrains Mono` medium uppercase. Tap targets never fall below 48px square to guarantee gloved-hand actuation.
- **Secondary Action (Lap/Pause):** Dark matte surface (`#1C1F24`) framed by a 1px `#2B313A` border, shifting to `#D4FF00` text on press.
- **Destructive/Critical:** Bordered in solid Tertiary Amber (`#FF9100`) with high-contrast amber text and dark background.

### Telemetry Metric Cards
- Constructed with a `#121417` core, framed by a 1px solid `#2B313A` perimeter.
- Top section contains `label-caps` specifying the field (e.g., `3S POWER`, `HEART RATE`, `CADENCE`) in muted grey (`#8A94A6`).
- Center displays `metric-val` in monospaced white or primary Volt Lime. Units (`W`, `BPM`, `RPM`) reside in `label-sm` adjacent to the base alignment of the metric number.

### Input Fields & Selectors
- Flat `#08090A` background with crisp 1px `#2B313A` edges.
- Cursor and active border leverage `#D4FF00`. Placeholder typography is styled in monospaced muted tones.

### Toggle Switches & Data Sliders
- Hard-edged, mechanical switches: Rectangular housing with a solid 2px offset toggle block.
- Inactive state: `#2B313A` frame with `#525C6A` block.
- Active state: `#D4FF00` housing with a `#08090A` solid toggle head.

### Specialized Telemetry Components
- **Turn-by-Turn Waypoint Cue:** High-contrast direction arrows rendered in `#D4FF00` or `#00F0FF` accompanied by bold distance counters counting down every single meter.
- **Power Zone Gauge:** Segmented 7-bar segmented horizontal meter with clean 2px gaps, illuminating zone colors (Active Recovery through Neuromuscular) against an unlit charcoal background.