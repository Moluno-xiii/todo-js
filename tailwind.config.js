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
        pantoneLightBlue: "#6ea1d4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
