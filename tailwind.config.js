/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#a6ff00",
        "color-green-hover": "#a6ff00",
        "color-bg": "#5d5261"
      },
      padding: {
        "backdrop-pc": "5.5rem"
      },
      borderRadius: {
        "pc": "1rem"
      },
      margin: {
        "backdrop-pc": "4rem"
      },
      screens: {
        "360": "360px",
        "375": "375px",
        "414": "414px",
        "500": "500px",
        "670": "670px",
        "777": "777px",
        "800": "800px",
        "801": "801px",
        "811": "811px",
        "940": "940px",
        "950": "950px",
        "1024": "1024px",
        "1160": "1160px",
        "1200": "1200px",

      }
    },
  },
  plugins: [],
}