/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07091f',
          900: '#0d1330',
          800: '#111c40',
          700: '#1a2850',
          600: '#223060',
        },
        primary: '#22d3ee',
        'primary-dim': 'rgba(34,211,238,0.15)',
        'primary-glow': 'rgba(34,211,238,0.4)',
        gold: '#fbbf24',
        'gold-dim': 'rgba(251,191,36,0.15)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(34,211,238,0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-mid': 'floatMid 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-30px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        floatMid: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
