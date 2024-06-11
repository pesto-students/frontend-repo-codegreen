/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      'white': "#ffffff",
      'dark-green': "#36592F",
      'orange': "#e48c3c",
      "light-green": "#CDCD8A",
      'beige': "#EFE7D2",
      "darkest-green": "#213B1C",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
