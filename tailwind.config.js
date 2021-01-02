module.exports = {
  purge: [ 'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'up-green': '#40d8c6',
        'up-gold': '#eec313',
        'up-red': '#fe838c',
        'up-purple': '#af85c2',
      },
      margin: {
        'flag': '5px',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
