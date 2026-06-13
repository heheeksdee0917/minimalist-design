import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif'],
      },
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
      maxWidth: {
        'content': '1400px',
      },
      spacing: {
        'nav-bottom': '112px',
      },
    },
  },
  plugins: [],
};

export default config;
