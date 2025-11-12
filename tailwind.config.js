/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFD159",
        "background-light": "#F9F9F7",
        "background-dark": "#1A202C",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
}
