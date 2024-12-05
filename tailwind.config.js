/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          primary: '#D4A206',
          light: "#F0C93D",
        },
        green: {
          dark: '#001405',
        },
        blue: {
          dark: "#0F172A"
        },
        red: {
          dark: "#6D0101"
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #0F172A 50%, #0F172A 0%)',
      },
    },
  },
  plugins: [],
}
