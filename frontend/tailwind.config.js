module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        },
        borderRadius: {
          md: '4px'
        }
      },
      screens: {
        'mobilemin': { 'min': "100px", 'max': "300px" },
        'mobile': {'min': "300px", 'max': "800px" },
      },
    },
  },
  plugins: [],
};