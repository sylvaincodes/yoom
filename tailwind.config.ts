import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'
const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        xs: '0rem',
        sm: '0rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        'xs': '320px', // => @media (min-width: 320px){ ... }
        'sm': '575px', // => @media (min-width: 575px){ ... }
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "2xl": "1440px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      "loading": {
        '0%': { opacity: "0" },
        '10%': { opacity: "0.1" },
        '20%': { opacity: "0.2" },
        '50%': { opacity: "0.5" },
        '70%': { opacity: "0.7" },
        '100%': { opacity: "1" },
      },


      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loading-transition": "loading 1s ease-in-out",
        "shimmer": "shimmer 2s linear infinite"
      },
    },

    colors: {

      // default colors 
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      sky: colors.sky,
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      blue: colors.blue,
      neutral: colors.neutral,

      dark: {
        '1': "#161925",
        '2': "#1C1F2E",
      },

      primary: {
        '400': '#0E78F9'
      },

      secondary: {
        '400': '#252A41'
      },

      tertiare: {
        '400': '#ECF0FF'
      },

      meeting: '#FF742E',
      schedule: '#830EF9',
      recording: '#F9A90E',

    }

  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors,
  function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        "bg-dot-thick": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config