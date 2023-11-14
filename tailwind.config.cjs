/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
