/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "'Roboto', 'sans-serif'",
    },

    backgroundImage: {
      galaxy: "url('./endless-constellation.svg')",
    },

    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
