/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text': '#00fff9',
        'background': '#010029',
        'secondary': '#00296f',
        'accent': '#01629c'
      }
    },
  },
  plugins: [],
}