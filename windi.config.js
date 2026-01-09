import plugin from 'windicss/plugin';

export default {
  /* configurations... */
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        black: '#000',
        black333: '#333',
        black666: '#666',
        black999: '#999',
        grayF9: '#F9F9F9',
        grayE4: '#E4E4E4',
        grayF1: '#F1F1F1',
        gray: '#8E969C',
        blue: '#0598FE',
        yellow: '#9B4C00',
        borderOrange: '#FFA12E',
        redF35: '#FF3535',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        // xs: '375px',
        // sm: '750px',
      },
    },
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer',
    'btn-green': 'inline-block rounded-12px py-6px px-12px text-yellow text-12px bg-white bg-opacity-30 font-bold h-25px text-center cursor-pointer',
    'flex-between': 'flex  justify-between',
    'flex-around': 'flex  justify-around',
    'flex-center': 'flex  justify-center items-center',
    'text-ellipsis': 'overflow-ellipsis whitespace-nowrap overflow-hidden',
    'detail-box': 'p-12px border-purple rounded-8px bg-deep-black bg-opacity-20 mb-28px backdrop-filter backdrop-blur-5',
    'bd-filter-5': 'backdrop-filter backdrop-blur-5',
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '4px 8px',
          borderRadius: '28px',
          fontWeight: '400',
          textAlign: 'center',
        },
      };
      addComponents(buttons);
    }),
    // plugin(({ addDynamic, variants }) => {
    //   addDynamic(
    //     'skew',
    //     ({ Utility, Style }) => {
    //       return Utility.handler
    //         .handleStatic(Style('skew'))
    //         .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
    //         .createProperty('transform');
    //     },
    //     variants('skew'),
    //   );
    // }),
    // require('windicss/plugin/filters'),
    // require('windicss/plugin/forms'),
    // require('windicss/plugin/aspect-ratio'),
    // require('windicss/plugin/line-clamp'),
    // require('windicss/plugin/typography')({
    //   modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    // }),
  ],
};
