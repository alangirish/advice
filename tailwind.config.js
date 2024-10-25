/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyish_blue: "#4e5d73",
        dark_greyish_blue: "#313a49",
        dark_blue: "#1f2632",
        light_cyan :"#cee3e9",
        neon_green:"#52ffa8",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
