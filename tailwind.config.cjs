/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19a2ae",
        secondary: "#2d3248",
        gray: {
          100: "#969696",
          200: "#6a6f81",
          300: "#292c35",
          400: "#17181d",
        }
      },
    },
  },
  plugins: [],
}