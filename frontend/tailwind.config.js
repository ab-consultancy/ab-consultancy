/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        brand: {
          50: '#F0F6FE',
          100: '#E1EDFE',
          200: '#C7DDFF',
          500: '#0062FF',
          600: '#0052CC',
          700: '#0040A3',
          navy: '#0B1528',
          slate: '#1E293B',
          gray: '#475569',
          lightBlue: '#EBF3FE'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(0, 98, 255, 0.25), 0 8px 10px -6px rgba(0, 98, 255, 0.2)',
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}

