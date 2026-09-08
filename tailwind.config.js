/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#e8f0ee',
          100: '#c4d8d3',
          200: '#9bbdb5',
          300: '#6fa298',
          400: '#4d847a',
          500: '#33665d',
          600: '#234e46',
          700: '#1a3b34',
          800: '#142d27',
          900: '#10231f',
          950: '#0a1714',
        },
        lime: {
          50: '#f6ffe0',
          100: '#eefdc4',
          200: '#dcfb8e',
          300: '#c7f36b',
          400: '#aee048',
          500: '#8fc62c',
          600: '#6da01e',
          700: '#527a1a',
          800: '#3f5f18',
          900: '#344f17',
        },
        clay: {
          50: '#fbeee7',
          100: '#f5d4c4',
          200: '#ecb49c',
          300: '#e09373',
          400: '#d9855b',
          500: '#c96a3e',
          600: '#b05230',
          700: '#8f3f28',
          800: '#743425',
          900: '#5f2c21',
        },
        paper: {
          50: '#fdfcf8',
          100: '#faf7f0',
          200: '#f5f2ea',
          300: '#ede8db',
          400: '#ddd5c3',
          500: '#c8bea7',
          600: '#b0a68b',
          700: '#8e8670',
          800: '#6f6856',
          900: '#5a5446',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'spin-slow': 'spin 1.2s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'checkmark': 'checkmark 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        checkmark: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
