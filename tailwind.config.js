/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pantoneGreen: "#7C9670",
        pantonePurple: "#76697E",
        pantoneTangerine: "#DD4123",
        pantoneBlue: "#0953BC",
        pantoneRed: "#AA0A24",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
