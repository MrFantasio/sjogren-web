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
        'grayblue': '#ADBBCE',
        'darkblue': '#04092F',
        'darkorange': '#AB5C07'
      },
      fontFamily: {
        notoSans: ['"Noto Sans"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
export default config;
