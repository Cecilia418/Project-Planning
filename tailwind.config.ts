import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        surface: "#FFFDFC",
        ink: "#3F3935",
        muted: "#8C8178",
        clay: "#C98268",
        claySoft: "#F3E3DA",
        line: "#EAE1D9",
        completed: "#A9A09A",
      },
    },
  },
  plugins: [],
};

export default config;
