import React from 'react';

export const VelorayLogoMark: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 44 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Aerodynamic delta wing with airspeed vents */}
    <path
      d="M2 12L22 2L42 12L22 22L2 12Z"
      fill="#caf300"
      opacity="0.95"
    />
    <path
      d="M10 12L22 6L34 12L22 18L10 12Z"
      fill="#111316"
    />
    <line x1="15" y1="12" x2="29" y2="12" stroke="#caf300" strokeWidth="2" strokeLinecap="round" />
    <circle cx="22" cy="12" r="2" fill="#caf300" />
  </svg>
);
