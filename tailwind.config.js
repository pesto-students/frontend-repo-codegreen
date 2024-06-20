/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem'
      }
    },
    colors: {
      transparent: "transparent",
      'white': "#ffffff",
      'dark-green': "#36592F",
      'orange': "#e48c3c",
      "light-green": "#CDCD8A",
      'beige': "#EFE7D2",
      "darkest-green": "#213B1C",
      'red' : "#c90a0a",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
