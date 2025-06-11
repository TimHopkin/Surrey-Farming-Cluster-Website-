import React from 'react';

// Centralized logo assets configuration
// All logo references should use these constants to ensure consistency

export const LOGO_ASSETS = {
  // Main logo files (centralized in /public/brand/assets/logos/)
  FULL_LOGO: '/brand/assets/logos/logo.svg',
  ICON_ONLY: '/brand/assets/logos/icon-only.svg', 
  COMPACT_LOGO: '/brand/assets/logos/logo-compact.svg',
  FAVICON: '/brand/assets/logos/favicon.svg',
  
  // Fallback paths (will be deprecated)
  FAVICON_ICO: '/favicon.ico',
  FAVICON_SVG: '/favicon.svg',
} as const;

// Logo components as React elements for consistent inline SVG usage
export const LogoSVG = {
  SEEDLING: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-full h-full">
      <g transform="translate(10, 10)">
        <path d="M20 25 L20 35" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 20 Q15 10, 20 15 Q15 25, 10 20" fill="#4CAF50"/>
        <path d="M30 20 Q25 10, 20 15 Q25 25, 30 20" fill="#2E7D32"/>
        <path d="M16 17 Q14 13, 20 15 Q18 20, 16 17" fill="#81C784"/>
        <g stroke="#5D4037" strokeWidth="2" fill="none">
          <path d="M20 35 Q16 38, 12 40"/>
          <path d="M20 35 Q24 38, 28 40"/>
          <path d="M20 35 L20 40"/>
        </g>
      </g>
    </svg>
  ),
  
  SEEDLING_WITH_BACKGROUND: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-full h-full">
      <circle cx="30" cy="30" r="28" fill="#ffffff" stroke="#2E7D32" strokeWidth="2"/>
      <g transform="translate(10, 10)">
        <path d="M20 25 L20 35" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 20 Q15 10, 20 15 Q15 25, 10 20" fill="#4CAF50"/>
        <path d="M30 20 Q25 10, 20 15 Q25 25, 30 20" fill="#2E7D32"/>
        <path d="M16 17 Q14 13, 20 15 Q18 20, 16 17" fill="#81C784"/>
        <g stroke="#5D4037" strokeWidth="2" fill="none">
          <path d="M20 35 Q16 38, 12 40"/>
          <path d="M20 35 Q24 38, 28 40"/>
          <path d="M20 35 L20 40"/>
        </g>
      </g>
    </svg>
  )
} as const;

// Brand text constants
export const BRAND_TEXT = {
  FULL_NAME: 'Surrey Farming Cluster',
  SHORT_NAME: 'SFC',
  TAGLINE: 'Growing Together for a Sustainable Surrey'
} as const;

// Usage notes:
// 1. Always import and use LOGO_ASSETS constants instead of hardcoded paths
// 2. Use LogoSVG.SEEDLING for inline SVG components
// 3. Use LOGO_ASSETS.FULL_LOGO for img src attributes
// 4. Update logos only in /public/brand/assets/logos/ folder