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
      mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
    },
    /* https://raw.githubusercontent.com/luisiacc/catppuccin-baby/main/extras/media/palettes/medium.svg */
    colors: {
      'catppuccin-crust': '#11111b',
      'catppuccin-base': '#1e1e2e',
      'catppuccin-surface': '#313244',
      'catppuccin-overlay': '#45475a',
      'catppuccin-muted': '#6c7086',
      'catppuccin-subtle': '#9399b2',
      'catppuccin-text': '#cdd6f4',
      'catppuccin-love': '#f38ba8',
      'catppuccin-gold': '#fabd2f',
      'catppuccin-rosewater': '#f5e0dc',
      'catppuccin-flamingo': '#f2cdcd',
      'catppuccin-pink': '#f5c2e7',
      'catppuccin-mauve': '#cba6f7',
      'catppuccin-red': '#f38ba8',
      'catppuccin-maroon': '#eba0ac',
      'catppuccin-peach': '#fab387',
      'catppuccin-yellow': '#f9e2af',
      'catppuccin-green': '#a6e3a1',
      'catppuccin-teal': '#94e2d5',
      'catppuccin-sky': '#89dceb',
      'catppuccin-sapphire': '#74c7ec',
      'catppuccin-blue': '#89b4fa',
      'catppuccin-lavender': '#b4befe',
      'catppuccin-gray': '#a6adc8',
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

