import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        splash: "splash 0.5s ease-in-out 1",
        leaving: "leaving 0.2s ease 1",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        splash: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        leaving: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
