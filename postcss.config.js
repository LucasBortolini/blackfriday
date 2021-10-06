module.exports = {
  parser: 'postcss-sass',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}