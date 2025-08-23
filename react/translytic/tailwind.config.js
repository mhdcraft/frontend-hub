/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4D5562",
          200: "#394150",
          300: "#212936CC",
          400: "#1f2937",
          500: "#040711",
        },
        secondary: {
          0: "#F9FAFB",
          100: "#D2D5DA",
        },
        blue: {
          300: "#7CA9F3",
          400: "#263FA9",
          500: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
