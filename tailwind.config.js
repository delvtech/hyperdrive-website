/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eggplant: {
          100: '#F3E9ED',
          200: '#DAC7CE',
          300: '#C1A5AF',
          400: '#8E6172',
          500: '#753F53',
          600: '#462632',
          700: '#231319',
          800: '#170D11',
          900: '#0C0608',
        },
        aquamarine: {
          100: '#E8FFF7',
          200: '#D0FFEE',
          300: '#A1FFDD',
          400: '#73FFCD',
          500: '#15FFAB',
          600: '#11CC89',
          700: '#086644',
          800: '#043322',
          900: '#021A11',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#FAF5F5',
          300: '#DAD3D3',
          400: '#C6C0C0',
          500: '#A19999',
          600: '#7C7878',
          700: '#595555',
          800: '#393636',
          900: '#161616',
        },
        'aquamarine-fade': '#BDFFD7',
        'sky': '#14D3F9',
        'pacific': '#00A7CC',
        'non-photo-blue': '#95ECFF',
      },
    },
  },
  plugins: [],
};
