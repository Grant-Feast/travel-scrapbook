/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*index.html'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato'],
        Cardo: ['Cardo'],
      },
      colors: {
        primary: {
          100: '#e9e7e7',
        },
        secondary: {
          100: '#232323',
        }
      }
    },
  },
  plugins: [],
}
