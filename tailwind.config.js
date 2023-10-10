/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryColor": 'rgb(180, 180, 180)'
      }
    },
  },
  plugins: [],
}

