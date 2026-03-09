/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: '#09090b',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Entrance animations — not interaction feedback, longer durations acceptable
        'fade-up':       'fadeUp 0.5s ease-out forwards',
        'fade-in':       'fadeIn 0.4s ease-out forwards',
        'slide-in-right':'slideInRight 0.3s ease-out forwards',
        // Looping / decorative
        'cursor-blink':  'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
