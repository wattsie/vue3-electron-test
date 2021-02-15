module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: require('tailwindcss/colors'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
