import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/popover.js",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        chokokutai: ["var(--font-chokokutai)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#252525",
          100: "#1d1d1d",
          200: "#040404",
        },
        gray: {
          DEFAULT: "#898989",
          100: "#545454",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors, require("tailwind-scrollbar-hide")],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
