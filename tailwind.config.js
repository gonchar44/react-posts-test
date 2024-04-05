module.exports = {
  purge: ['./src/**/*.{jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito'
      }
    },
    colors: {
      primary: {
        main: '#282828',
        light: '#f3edea'
      },
      secondary: {
        main: '#6a6a6a',
        transparent: 'transparent'
      }
    }
  },
  plugins: []
}
