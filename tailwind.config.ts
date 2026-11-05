import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: "#0d1322",
        "surface-card": "#131b2e",
        "surface-border": "#1e2c47",
        primary: {
          DEFAULT: "#006067",
          hover: "#007a82",
          light: "#00a2ac",
          glow: "#00e5ff",
        },
        accent: {
          cyan: "#00e5ff",
          teal: "#14b8a6",
          emerald: "#10b981",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 229, 255, 0.25)",
        "glow-teal": "0 0 30px -5px rgba(0, 96, 103, 0.4)",
        "glow-lg": "0 0 45px -10px rgba(0, 229, 255, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
