const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#004C91',
        yellow: '#FFC300',
        red: '#FF5733',
        link: '#0055FF',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      fontSize: {
        title: ['35px'],
        title_secondary: ['21px'],
        title_mobile: ['21px'],
        base: ['20px'],
        base_secondary: ['16px'],
      },
    },
  },
  plugins: [],
});

