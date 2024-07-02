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
      mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
    },
    /* https://raw.githubusercontent.com/luisiacc/catppuccin-baby/main/extras/media/palettes/medium.svg */
    colors: {
      'catppuccin-dark': '#1e1e2e',
      'catppuccin-gray': '#a6adc8',
      'catppuccin-milk': '#bac2de',
      'catppuccin-red': '#f38ba8',
      'catppuccin-green': '#a6e3a1',
      'catppuccin-yellow': '#fabd2f',
    },
    extend: {},
  },
  plugins: [],
}

