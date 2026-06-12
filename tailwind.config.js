/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'text-primary': '#F5F5F5',
        'text-muted': '#888888',
        'text-subtle': '#555555',
        border: 'rgba(255, 255, 255, 0.08)',
        overlay: 'rgba(0, 0, 0, 0.55)',
        'nav-glass': 'rgba(10, 10, 10, 0.65)',
        'nav-border': 'rgba(255, 255, 255, 0.10)',
        placeholder: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-tight': '-0.02em',
        display: '0.08em',
        heading: '0.06em',
        label: '0.12em',
        nav: '0.08em',
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1', fontWeight: '300', letterSpacing: '0.12em' }],
        'hero-mobile': ['36px', { lineHeight: '1.1', fontWeight: '300', letterSpacing: '0.12em' }],
        'page-title': ['48px', { lineHeight: '1.1', fontWeight: '300', letterSpacing: '0.06em' }],
        'page-title-mobile': ['32px', { lineHeight: '1.15', fontWeight: '300', letterSpacing: '0.06em' }],
        'section-heading': ['40px', { lineHeight: '1.15', fontWeight: '300', letterSpacing: '0.06em' }],
        'section-heading-mobile': ['28px', { lineHeight: '1.2', fontWeight: '300', letterSpacing: '0.06em' }],
        'body': ['17px', { lineHeight: '1.75', fontWeight: '400' }],
        'nav': ['13px', { lineHeight: '1', fontWeight: '400', letterSpacing: '0.08em' }],
        'nav-active': ['13px', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.08em' }],
        'label': ['12px', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0.12em' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.06em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1400px',
        'prose': '680px',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease forwards',
        'fade-out': 'fadeOut 200ms ease forwards',
        'fade-up': 'fadeUp 500ms ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
