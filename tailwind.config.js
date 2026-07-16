/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F8',
        paper: '#FFFFFF',
        charcoal: '#1A1C1C',
        obsidian: '#2F3130',
        'muted-dark': '#464652',
        'muted-light': '#F1F0F0',
        'surface-dim': '#DADAD9',
        'surface-low': '#F4F3F2',
        'surface-container': '#EEEEED',
        'surface-high': '#E3E2E1',
        'primary-mint': '#E0E0FF',
        'secondary-lavender': '#BFC2FF',
        'tertiary-blue': '#C7E7FF',
        'secondary-warm': '#F2DED7',
        primary: '#4F55AE',
        secondary: '#6A5B56',
        tertiary: '#3A637C',
        outline: '#767683',
        'border-light': 'rgba(118, 118, 131, 0.22)',
        'border-dark': 'rgba(255, 255, 255, 0.24)',
      },
      fontFamily: {
        sans: ['Manrope', 'Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['EB Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '304px',
        'section-gap': '5rem',
      },
      borderRadius: {
        glass: '1.75rem',
        'glass-lg': '2.5rem',
      },
      boxShadow: {
        glass: 'inset 1px 1px 0 rgba(255,255,255,0.62), inset -1px -1px 0 rgba(255,255,255,0.18), 0 30px 90px rgba(79,85,174,0.11)',
        glow: '0 32px 100px rgba(79,85,174,0.16)',
      },
    },
  },
  plugins: [],
};
