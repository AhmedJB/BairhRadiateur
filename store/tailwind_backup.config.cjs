/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      blue : '#2FA3DF',
      red : '#E91D2B',
      yellow : '#FFCA50',
      mainBlack : '#101010',
      darkGray : '#434343',
      gray: '#8E8E8E',
      lightgray : '#C9C9C9',
      lightWhite : '#EEEEEE',
      lighterGray : '#B8B8B8'

    },
    extend: {},
  },
  plugins: [
    /* require("flowbite/plugin") */
  ],
};
