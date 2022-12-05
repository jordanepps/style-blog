/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald'],
        body: ['Roboto'],
      },
    },
  },
  plugins: [],
};

//TODO:Add theme to reduce typed out multi classes
