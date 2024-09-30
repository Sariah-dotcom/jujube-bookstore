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
        poppins: ['Poppins', 'sans-serif'],
        inter : ['Inter', 'sans-serif'] 
      },
      colors: {
        "dark-green": "#0C8242",
        "lime-green": "#87C21D",
        "med-green": "#8EBA3F",
        "lighter-green": "#D4E7C5",
        "grey":"#6B6B6B"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}