/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        cream: "#FBCC9D",
        "dark-cyan": "#3C8067",
      },
    },
  },
  plugins: [require("daisyui")],
};
