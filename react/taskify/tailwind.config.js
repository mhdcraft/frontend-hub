/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9A23B",
        secondary: {
          F5E8D5: "#F5E8D5",
          FFF7ED: "#FFF7ED",
          ebebeb: "#ebebeb",
          blue: "#3662E3",
        },
        neutral: {
          white: "#FFFFFF",
          E3E8EF: "#E3E8EF",
          600: "#00000033",
          700: "#97A3B6",
        },
        success: "#32D657",
        successLight: "#A0ECB1",
        warning: "#E9A23B",
        warningLight: "#F5D565",
        error: "#DD524C",
        errorLight: "#F7D4D3",
      },
    },
  },
  plugins: [],
};
