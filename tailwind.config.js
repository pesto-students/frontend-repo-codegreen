/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'reveal-down': 'reveal-down 0.5s ease-out',
      },
      keyframes: {
        'reveal-down': {
          '0%': {
            opacity: 0,
            height : '0',
          },
          '50%' : {
            opacity: 0.5,
            height : '50%',
          }
          ,
          '100%': {
            opacity: 1,
            height : 'auto',
          },
        },
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
      'gray' : "#8F97A6"
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
