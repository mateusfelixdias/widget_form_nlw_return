module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#e2e8f0',
          300: '#036c8f'
        }
      }
    },

    screens: {
      'mobile': { 'min': '100px', 'max':'400px'},
      'table': { 'min': '400px', 'max': '600px' }
    },
  },

  plugins: [],
};
