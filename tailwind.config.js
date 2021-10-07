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
          900: '#191919',
          400: '#818181',
          100: '#989898',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
