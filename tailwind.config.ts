import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        felt: {
          50: "#eefbf4",
          100: "#d6f5e3",
          200: "#b0e9cb",
          300: "#7bd6ab",
          400: "#43bb85",
          500: "#1f9e6b",
          600: "#0f7d54",
          700: "#0c6446",
          800: "#0d5039",
          900: "#0b4230",
          950: "#04251b",
        },
        gold: {
          400: "#f5c451",
          500: "#e6a817",
          600: "#c4860a",
        },
        ink: {
          800: "#161b22",
          900: "#0d1117",
          950: "#080b10",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
