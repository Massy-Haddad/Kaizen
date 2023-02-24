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
    textColor: {
      skin: {
        base: `rgb(235, 238, 240)`,
        muted: `rgb(199, 210, 254)`,
        inverted: `rgb(79, 70, 229)`,
      },
    },
    backgroundColor: {
      skin: {
        fill: `rgb(185, 28, 28)`,
      },
    },
    gradientColorStops: {
      skin: {
        hue: `rgb(185, 28, 28)`,
      },
    },
  },
  plugins: [],
};
