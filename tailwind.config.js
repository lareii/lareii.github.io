/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },
    /* https://raw.githubusercontent.com/luisiacc/gruvbox-baby/main/extras/media/palettes/medium.svg */
    colors: {
      'gruvbox-dark': '#242424',
      'gruvbox-gray': '#665c54',
      'gruvbox-milk': '#e7d7ad',
      'gruvbox-red': '#fb4934',
      'gruvbox-green': '#98971a',
      'gruvbox-yellow': '#fabd2f',
    },
    extend: {},
  },
  plugins: [],
}

