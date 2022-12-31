/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      productsBackground: "#2A2B3B",
      black: "#000000",
      buttonColor: "#CA0515",
      gray: "#808080",
      productBg: "#2A2B3B",
    },
  },
  plugins: [],
};
