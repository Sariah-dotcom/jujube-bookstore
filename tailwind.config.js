const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif'],
        inter : ['Inter', 'sans-serif'] 
      },
      colors: {
        "dark-green": "#0C8242",
        "lime-green": "#87C21D",
        "med-green": "#8EBA3F",
        "light-green": "#D5FF8A",
        "grey":"#6B6B6B"
      },
      dropShadow: {
        '2xl': '0 35px 35px rgba(0, 0, 0, 0.65)',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}