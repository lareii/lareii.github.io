/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Archivo"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
}

