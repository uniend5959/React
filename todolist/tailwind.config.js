/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'btnpx' : '170px',
      },
      lineHeight: {
        'btnHeiht' : '40px',
      },
    },
  },
  plugins: [],
}

