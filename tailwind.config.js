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
    extend: {
      fontFamily: {
        ubuntu_bold: ["UbuntuBold", "Sans-serif"],
        ubuntu_light: ["UbuntuLight", "Sans-serif"],
        din_alternate: ["DIN_Alternate", "Sans-serif"],
        roboto_regular: ["RobotoRegular", "Sans-serif"],
      },
    },
    colors: {
      blue: "#005EB8",
    },
  },
  plugins: [],
};
