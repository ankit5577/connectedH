const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : "",
  darkMode: "class",
  content: ["./src/**/*.{ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
