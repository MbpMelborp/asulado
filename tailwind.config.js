/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vice: ["var(--font-vice)"],
        je: ["var(--font-je)"],
        sans: ["var(--font-avenir)"],
      },
      colors: {
        primary: "#273E82",
        secondary: "#5FA4C0",
        BG: {
          1: "#08C1FE",
          2: "#F8EC81",
        },
        azul: {
          dark: "#18254E",
          norm: "#273E82",
          bold: "#2752B0",
        },
        amarillo: {
          light: "#F5DA70",
          mid: "#F0C82F",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
