/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      textColor: {
        skin: {
          base: `rgb(17, 24, 2)`,
          muted: `rgb(47, 67, 6)`,
          inverted: `rgb(235, 250, 204)`,
        },
      },
      backgroundColor: {
        skin: {
          fill: `rgb(179, 255, 23)`,
        },
      },
      borderColor: {
        skin: {
          base: `rgb(179, 255, 23)`,
          inverted: `rgb(235, 250, 204)`,
        }
      },
      gradientColorStops: {
        skin: {
          hue: `rgb(179, 255, 23)`,
        },
      },
    },
  },
  plugins: [],
};
