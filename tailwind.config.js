/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#98A5A2',
          opacity: '#98A5A2d4',
          ligth: '#b4bcba',
          300: '#889390',
          400: '#79817f',
        },
        secondary: {
          DEFAULT: '#D4A53B',
          opacity: '#D4A53Bd4',
          ligth: '#ECC67C',
          300: '#be973a',
          400: '#a68333',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
