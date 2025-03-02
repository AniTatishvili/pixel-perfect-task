import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "sf-pro": ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
