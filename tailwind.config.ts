import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 'background-light': '#ffffff',
        'background-dark': '#000000',
        'text-light': '#000000',
        'text-dark': '#ffffff',
        'bg-light': '#ffffff',
        'bg-dark': '#000000',
       
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'],
      },
    },
  },
},
  plugins: [require("daisyui"),("recharts")],
};
export default config;
