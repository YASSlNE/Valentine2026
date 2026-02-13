import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        lily: "var(--color-lily)",
        gold: "var(--color-gold)",
        ink: "var(--color-ink)",
        blush: "var(--color-blush)"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 12px 30px rgba(72, 56, 23, 0.12)",
        glow: "0 0 0 1px rgba(250, 216, 110, 0.25), 0 10px 24px rgba(246, 214, 90, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
