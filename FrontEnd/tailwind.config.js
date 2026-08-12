/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        brush: ['Permanent Marker', 'cursive'],
      },
      colors: {
        navy: {
          50: '#e6eaf1',
          100: '#b3c1d6',
          200: '#8098bb',
          300: '#4d6fa0',
          400: '#1a4685',
          500: '#001B4D',
          600: '#00163d',
          700: '#00102e',
          800: '#000b1f',
          900: '#00050f',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffd3b8',
          200: '#ffb68a',
          300: '#ff995c',
          400: '#ff7c2e',
          500: '#FF4B0B',
          600: '#e64309',
          700: '#cc3a08',
          800: '#b33107',
          900: '#992906',
        },
        warm: {
          50: '#F6F6F4',
          100: '#ededea',
          200: '#e4e4e0',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
