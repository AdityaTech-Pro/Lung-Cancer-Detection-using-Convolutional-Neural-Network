/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        healthcare: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dcfd',
          300: '#89c3fb',
          400: '#57a6f7',
          500: '#358ae9',
          600: '#1f6dc9',
          700: '#1957a1',
          800: '#174a83',
          900: '#163f6d',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(37, 99, 235, 0.25)',
      },
      borderRadius: {
        xl: '1rem',
      }
    },
  },
  plugins: [],
} 