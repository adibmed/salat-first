const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Naskh Arabic", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#100e16",
        secondary: "#2b2b3c",
        neutral: "#262637",
      },
    },
  },
  plugins: [],
};
