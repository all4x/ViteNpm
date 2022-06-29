/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      roboto: "'Roboto', 'sans-serif'",
    },

    backgroundImage: {
      galaxy: "url('./src/images/endless-constellation.svg')",
    },

    extend: {},
  },
  plugins: [],
};
