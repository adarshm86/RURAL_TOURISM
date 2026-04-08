/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        kannada: ['"Noto Serif Kannada"', 'serif'],
      },
      colors: {
        earth: {
          50: '#fdf8f0',
          100: '#f8ecda',
          200: '#eed8b0',
          300: '#e0be7e',
          400: '#d4a054',
          500: '#c8863a',
          600: '#b06a2a',
          700: '#8f5121',
          800: '#74421f',
          900: '#60371d',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        ochre: '#c8793a',
        sandstone: '#e8d5b0',
        deepgreen: '#1a3d2b',
      },
      animation: {
        'leaf-fall': 'leafFall linear infinite',
        'fade-up': 'fadeUp 1.2s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        leafFall: {
          '0%': { transform: 'translateY(-50px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px 2px rgba(200,121,58,0.4)' },
          '50%': { boxShadow: '0 0 20px 6px rgba(200,121,58,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
