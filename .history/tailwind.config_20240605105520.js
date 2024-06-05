/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      indigo: "#5c6ac4",
      blue: "#007ace",
      red: "#de3618",
    },
  },
  plugins: [],
  fontFamily: {
    ubuntu_bold: ["UbuntuBold", "Sans-serif"],
  },
};
