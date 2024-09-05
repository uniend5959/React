/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        red: 'red'
      },
    },
    container: {
      center: true, // 컨테이너를 자동으로 중앙 정렬
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px', // xl 사이즈를 1240px로 설정
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
};
