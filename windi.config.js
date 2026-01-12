import plugin from 'windicss/plugin';

export default {
  /* configurations... */
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        // 基础色
        black: '#000',
        black333: '#333',
        black666: '#666',
        black999: '#999',
        white: '#FFFFFF',

        // 新色彩系统 - 科技蓝紫主题
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',  // 主色调 - 靛蓝
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        accent: {
          cyan: '#06B6D4',      // 强调色 - 青色
          purple: '#A855F7',    // 强调色 - 紫色
          pink: '#EC4899',      // 强调色 - 粉色
          emerald: '#10B981',   // 成功色 - 翠绿
        },

        // 深色背景系统
        dark: {
          900: '#0F0F23',       // 最深背景
          800: '#1A1A2E',       // 深色背景
          700: '#16213E',       // 卡片背景
          600: '#1F2937',       // 次级背景
          500: '#374151',       // 边框色
        },

        // 渐变起止色
        gradient: {
          start: '#667EEA',     // 渐变起始 - 蓝紫
          middle: '#764BA2',    // 渐变中间 - 紫色
          end: '#F093FB',       // 渐变结束 - 粉紫
        },

        // 功能色
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        // 兼容旧色
        grayF9: '#F9F9F9',
        grayE4: '#E4E4E4',
        grayF1: '#F1F1F1',
        gray: '#8E969C',
        blue: '#6366F1',
        yellow: '#F59E0B',
        borderOrange: '#F97316',
        redF35: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Lexend', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06B6D4 0%, #6366F1 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F0F23 0%, #1A1A2E 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
        'gradient-btn': 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
        'mesh': 'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(168, 85, 247, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.2) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  shortcuts: {
    // 基础布局
    btn: 'py-3 px-6 font-semibold rounded-xl shadow-md cursor-pointer transition-all duration-300',
    'btn-primary': 'bg-gradient-btn text-white hover:shadow-glow hover:scale-105 active:scale-95',
    'btn-secondary': 'bg-dark-700 text-white border border-primary-500/30 hover:border-primary-500 hover:shadow-glow',
    'btn-outline': 'bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white',
    'btn-ghost': 'bg-transparent text-primary-400 hover:bg-primary-500/10',

    // Flex 布局
    'flex-between': 'flex justify-between',
    'flex-around': 'flex justify-around',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex flex-col justify-center items-center',

    // 文本效果
    'text-ellipsis': 'overflow-ellipsis whitespace-nowrap overflow-hidden',
    'text-gradient': 'bg-gradient-primary bg-clip-text text-transparent',
    'text-glow': 'text-shadow-glow',

    // 卡片样式
    'card': 'bg-dark-700/50 backdrop-blur-xl rounded-2xl border border-primary-500/10 p-6',
    'card-hover': 'hover:border-primary-500/30 hover:shadow-glow transition-all duration-300',
    'card-glass': 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10',

    // 旧兼容
    'btn-green': 'inline-block rounded-12px py-6px px-12px text-yellow text-12px bg-white bg-opacity-30 font-bold h-25px text-center cursor-pointer',
    'detail-box': 'p-12px border-purple rounded-8px bg-deep-black bg-opacity-20 mb-28px backdrop-filter backdrop-blur-5',
    'bd-filter-5': 'backdrop-filter backdrop-blur-5',

    // 新组件样式
    'section-title': 'text-3xl md:text-4xl font-bold text-white mb-4',
    'section-subtitle': 'text-lg text-primary-300 mb-8',
    'nav-link': 'text-gray-300 hover:text-white transition-colors duration-200',
    'badge': 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
    'badge-primary': 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
    'badge-accent': 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30',

    // 输入框
    'input-base': 'bg-dark-700 border border-primary-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all',
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
