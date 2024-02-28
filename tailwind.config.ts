import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'powderBlue': '#ADBBCE',
        'charcoal': '#393F4F',
        'melon': '#D2A69C',
        'darkblue': '#211C3A'
      },
      fontFamily: {
        notoSans: ['"Noto Sans"', "sans-serif"],
        montsserat: ['"Montserrat"', "sans-serif"]
        // Add more custom font families as needed
      },
      keyframes: {
        slideDown: {
            '0%': { opacity: '0', transform: 'translateY(-50px)' },
            '100%': { opacity: '100', toransform: 'translateY(0px)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '100', toransform: 'translateY(0px)' }
        }
      },
      animation: {
        'slideDown': "slideDown 500ms ease-in-out",
        'slideUp': "slideUp 500ms ease-in-out",
      }
    },
  },
  plugins: [],
};
export default config;
