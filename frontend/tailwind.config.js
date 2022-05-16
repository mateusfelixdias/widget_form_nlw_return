module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#036c8f'
        }
      }
    },

    screens: {
      'xs': { 'min': '100px', 'max':'400px'}
    },
  },

  plugins: [],
};
