/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{ts,tsx,mdx}',
    'src/components/**/*.{ts,tsx}',
    'src/utils/**/*.{ts,tsx}',
    'src/theme/**/*.{ts,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      overlay: 'rgba(0, 0, 0, 0.3)',
      'dark-overlay': 'rgba(0, 0, 0, 0.7)',
      white: '#ffffff',
      accent: withOpacityValue('--color-accent'),
      'accent-hover': withOpacityValue('--color-accent-hover'),
      onaccent: withOpacityValue('--color-onaccent'),
      surface: withOpacityValue('--color-surface'),
      onsurface: withOpacityValue('--color-onsurface'),
      body: withOpacityValue('--color-body'),
      placeholder: withOpacityValue('--color-placeholder'),
      background: withOpacityValue('--color-background'),
    },
    screens: {
      xs: rem(460),
      sm: rem(640),
      md: rem(768),
      lg: rem(1024),
      xl: rem(1280),
      '2xl': rem(1536),
      // Mobile-first styling is preferred, but as a last option we might resort to max-width breakpoints
      'max-lg': { max: rem(1023) },
      'max-2xl': { max: rem(1535) },
    },
    extend: {
      fontSize: {
        'heading-xxl': rem(112),
        'heading-xl': rem(64),
        'heading-l': rem(32),
        'heading-m': rem(24),
        'heading-s': rem(20),
        'heading-xs': rem(16),
        paragraph: rem(16),
        'paragraph-intro': rem(16),
        'paragraph-s': rem(12),
        'menu-item': rem(16),
        'input-label': rem(16),
        quote: rem(24),
        'mobile-heading-xl': rem(44),
      },
      lineHeight: {
        'heading-xxl': '1',
        'heading-xl': '1.25',
        'heading-l': '1',
        'heading-m': '1',
        'heading-s': '1.2',
        'heading-xs': '1',
        paragraph: '2',
        'paragraph-intro': '2',
        'paragraph-s': '2',
        'menu-item': '1',
        'input-label': '1',
        quote: '1.33',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        sm: rem(800),
        md: rem(1200),
        lg: rem(1360),
        xl: rem(1520),
      },
      boxShadow: {
        md: '0px 4px 4px 0px rgba(0, 0, 0, 0.03)',
        code: 'inset 0px 0px 10px rgba(0, 0, 0, 0.25)',
        elevate:
          '0px 2px 4px -1px rgb(0 0 0 / 18%), 0px 4px 5px 0px rgb(0 0 0 / 12%), 0px 1px 10px 0px rgb(0 0 0 / 10%)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *');
    },
  ],
  corePlugins: {
    container: false,
  },
};

// Theme color variable setup with opacity as described in https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

// Converts pixels to rem units, 1px equals 0.0625 rem
function rem(px) {
  return `${0.0625 * px}rem`;
}
