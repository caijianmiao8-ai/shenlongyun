import plugin from 'windicss/plugin';

export default {
  /* configurations... */
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        // 基础灰色系
        black: '#000',
        black333: '#333',
        black666: '#666',
        black999: '#999',
        grayF9: '#F9F9F9',
        grayE4: '#E4E4E4',
        grayF1: '#F1F1F1',
        gray: '#8E969C',

        // Logo红色主题色系
        primary: '#C94A4A',
        'primary-dark': '#A53A3A',
        'primary-light': '#E87070',
        'primary-50': '#FEF2F2',
        'primary-100': '#FDE8E8',
        'primary-200': '#FACACB',
        'primary-300': '#F5A3A4',
        'primary-400': '#E87070',
        'primary-500': '#C94A4A',
        'primary-600': '#A53A3A',
        'primary-700': '#8B2D2D',
        'primary-800': '#742525',
        'primary-900': '#5F2020',

        // 保留的辅助色
        blue: '#0598FE',
        yellow: '#9B4C00',
        borderOrange: '#FFA12E',
        redF35: '#FF3535',

        // 新增配套色
        'accent-gold': '#D4A574',
        'accent-cream': '#FFF8F0',
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
    'btn-primary': 'inline-block rounded-8px py-10px px-20px text-white bg-primary hover:bg-primary-dark cursor-pointer transition-colors',
    'btn-primary-outline': 'inline-block rounded-8px py-10px px-20px text-primary border border-primary hover:bg-primary-50 cursor-pointer transition-colors',
    'flex-between': 'flex  justify-between',
    'flex-around': 'flex  justify-around',
    'flex-center': 'flex  justify-center items-center',
    'text-ellipsis': 'overflow-ellipsis whitespace-nowrap overflow-hidden',
    'detail-box': 'p-12px border-purple rounded-8px bg-deep-black bg-opacity-20 mb-28px backdrop-filter backdrop-blur-5',
    'bd-filter-5': 'backdrop-filter backdrop-blur-5',
    'gradient-primary': 'bg-gradient-to-r from-primary to-primary-light',
    'card-hover': 'transition-all hover:shadow-lg hover:border-primary',
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
