import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      "dark",
      "winter",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "aqua",
      "pastel",
      "wireframe",
      "luxury",
      "dracula",
      "acid",
      "night",
      "forest",
    ],
  },
};
export default config;
