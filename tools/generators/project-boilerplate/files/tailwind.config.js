// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'nmb-blue': {
          primary: '#063f79',
          secondary: '#042240',
          light: '#8CBCE7',
          pale: '#BFDAF1',
          dark: '#006BCA',
          basic: '#005aa9',
        },
        'nmb-orange': {
          primary: '#B24606',
          secondary: '#f16e20',
          dark: '#FF5500',
          light: '#FFB28C',
          pale: '#FFD4BF',
        },
      },
      backgroundImage: theme => ({
        'login': "url('libs/v2/assets/images/background.jpg')",
      }),
      minHeight: {
        '280': 280,
      },
      maxHeight: {
        'screen-80' : '85vh'
      },
      maxWidth: {
        '5': '1.25rem'
      },
      minWidth: {
        '250': '250px'
      },
      height: {
        'screen-85' : '85vh',
        'screen-50' : '50vh',
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            'transform' : 'translateX(50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateX(40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateX(20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateX(0)',
            'opacity' : '1'
          },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.2s linear',
        fadeInDown: 'fadeInDown 3s linear',
        fadeInRight: 'fadeInRight 0.2s linear',
        fadeInLeft: 'fadeInLeft 0.2s linear',
      },
      flex: {
        2 : '2 1 0%',
      },
      fontSize: {
        '16px': '16px',
      }
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
      display: ['group-hover'],
      transform: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      backgroundColor: ['even'],
      boxShadow: ['hover'],
      translate: ['hover']
    },
  },
  plugins: [],
};
