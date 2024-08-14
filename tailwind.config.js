/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'pure-dark': '#232A34',
      'light-dark': '#181E27',
      'dark-blue': '#262E38',
      'light-grey': '#969FAD',
      'orange': '#FC7614',
      'pure-white': '#FFF',
      'very-dark-blue': '#131518'
    },
    fontFamily: {
      'body': ['Overpass', 'sans-serif']
    },
    extend: {
      spacing: {
        '112': '25.75rem'
      }
    },
  },
  plugins: [],
}

