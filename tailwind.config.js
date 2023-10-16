/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '1000px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      10: 10,
      12: 12,
      14: 14,
      16: 16,
      18: 18,
      20: 20,
      24: 24,
    },
    fontFamily: {},
    extend: {
      colors: {
        'oxford-blue': '#101935',
        charcoal: '#33485E',
        'paynes-grey': '#557786',
        moonstone: '#78A6AE',
        'tiffany-blue': '#9AD4D6',
        'light-cyan': '#C6E9EB',
        'azure-blue': '#F2FDFF',
      },
      backgroundImage: {},
      boxShadow: {},
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      keyframes: {},
      animation: {},
      zIndex: {},
      spacing: {},
    },
  },
  plugins: [require('flowbite/plugin')],
};
