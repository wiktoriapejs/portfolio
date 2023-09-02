/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        about:"url('./assets/mee.png')",
      },
      screens: {
        'msi': {'raw': '(width: 1181px) and (height: 572px)'},
      },
    },
    fontFamily:{
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}

