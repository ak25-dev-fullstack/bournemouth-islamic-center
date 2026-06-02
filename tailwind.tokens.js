// Merge into tailwind.config.{js,ts} → theme.extend
// Maps DESIGN.md tokens. Use as bg-ivory, text-ink, border-gold, font-serif, etc.

const tokens = {
  colors: {
    ivory:   '#F8F6F0',
    ink:     '#1A1916',
    'ink-2': '#1D1B16', // deep band that bridges hero → body
    white:   '#FFFFFF',

    gold:    '#C9963A',
    copper:  '#A0714F',
    stone:   '#8C8880',
    'stone-bg': '#EFEDE6', // pale stone section surface

    emerald:        '#0F6E56', // brand accent: donate band, prayer card, footer
    'emerald-deep': '#0A4F3E', // footer base

    // semantic (from DESIGN.md)
    success: '#3B6D11',
    warning: '#BA7517',
    error:   '#A32D2D',
    info:    '#185FA5',
  },

  fontFamily: {
    serif: ['"Cormorant Garamond"', 'serif'],   // headings
    sans:  ['Jost', 'Inter', 'sans-serif'],     // body / UI
    mono:  ['"JetBrains Mono"', 'monospace'],
  },

  fontSize: {
    // token: [size, line-height]
    h1:   ['48px', '1.15'],
    h2:   ['36px', '1.2'],
    h3:   ['24px', '1.3'],
    h4:   ['18px', '1.4'],
    body: ['16px', '1.7'],
    sm:   ['14px', '1.6'],
    xs:   ['12px', '1.5'],
  },

  spacing: {
    // 8px grid (DESIGN.md scale)
    1: '4px', 2: '8px', 3: '12px', 4: '16px',
    5: '24px', 6: '32px', 7: '48px', 8: '64px',
    9: '96px', 10: '128px',
  },

  borderRadius: {
    none: '0',
    DEFAULT: '4px', // buttons, inputs
    md: '8px',      // cards
    full: '9999px',
  },

  maxWidth: {
    content: '1200px',
  },

  screens: {
    sm: '640px',
    md: '1024px',
    lg: '1280px',
  },
};

module.exports = { extend: tokens };
