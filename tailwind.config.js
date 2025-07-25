/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: '#00f7ff',
        secondary: '#b829ff',
        accent: '#ff2d95',
        success: '#39ff14',
        warning: '#ff6b35',
        dark: '#050505',
        light: '#ffffff',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 30px #00f7ff' },
          '100%': { 'text-shadow': '0 0 20px #00f7ff, 0 0 30px #00f7ff, 0 0 40px #00f7ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 15px #00f7ff, 0 0 30px #00f7ff',
            opacity: '1',
          },
          '50%': {
            'box-shadow': '0 0 30px #00f7ff, 0 0 50px #00f7ff',
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [],
};