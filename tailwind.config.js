module.exports = {
  purge: [
  './_includes/**/*.html',
  './_layouts/**/*.html',
  './_posts/*.md',
  './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: '#E31F23',
        'light-red': '#EE2B30',
        'dark-red':'#D61214',
        gray: {
          200: '#989898',
          300: '#818181',
          400: '#717171',
          800: '#555555',
          900: '#191919',
        },
        blue: '#0096cf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
