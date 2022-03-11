const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Naskh Arabic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
