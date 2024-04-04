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
        light: '#f0e1d8'
      }
    }
  },
  plugins: []
}
