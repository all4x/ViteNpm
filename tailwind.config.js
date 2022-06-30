/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      roboto: "'Roboto', 'sans-serif'",
    },

    backgroundImage: {
      galaxy: "url('./src/components/background.jsx')",
    },

    extend: {},
  },
  plugins: [],
};
