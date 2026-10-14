import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFBF9",
          100: "#FAF8F5",
          200: "#F4EFEA",
          300: "#ECE5DD",
          400: "#DFD6C9",
        },
        charcoal: {
          DEFAULT: "#121316",
          950: "#0D0E10",
          900: "#141518",
          850: "#1A1C20",
          800: "#22252B",
          700: "#363A44",
          600: "#525766",
          500: "#757B8D",
          400: "#9DA3B4",
          300: "#CBD0DC",
          200: "#E4E7ED",
          100: "#F1F3F6",
        },
        brand: {
          red: "#D9232D",
          redDark: "#B81922",
          redDeep: "#8A1218",
          redLight: "#FFF1F2",
          redSubtle: "#FEE2E2",
          accent: "#E63946",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        serif: ['"Playfair Display"', "Georgia", "Cambria", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        editorial: "-0.03em",
        eyebrow: "0.15em",
        monowide: "0.2em",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)",
        editorial: "0 10px 30px -10px rgba(18, 19, 22, 0.08)",
        floating: "0 20px 40px -15px rgba(18, 19, 22, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
