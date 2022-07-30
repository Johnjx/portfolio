const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        prim: '#FEDDBE',
        sec: '#FFC947',
        ter: '#185ADB',
        quad: '#0A1931',
        yellowVar: '#FFEDA3',
        grayVar: '#F1F1F1'
      },
      fontFamily: {
        cp: ['Courier Prime', 'monospace'],
        gv: ['Great Vibes', 'cursive'],
        play: ['Play', 'sans-serif'],
        merri: ['Merriweather Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
