import typography from "./utils/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bs-violet": "#8b5cf6",
        "bs-yellow": "#EEFF41",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-bg-gradient": "linear-gradient(to bottom right, #808080, #1F1F1F)",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const newComponents: any = {
        ...typography,
      };
      addComponents(newComponents);
    }),
    require("@tailwindcss/forms"),
  ],
};
export default config;
