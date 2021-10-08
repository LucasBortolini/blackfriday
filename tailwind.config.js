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
          400: '#818181',
          800: '#989898',
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
