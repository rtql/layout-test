/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./pages/index.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['lato', 'sans-serif'],
    },
    extend: {
      colors: {
        default: "#ff7900",
        hover: "#ff9300",
      },
    },
  },
  plugins: [],
};
