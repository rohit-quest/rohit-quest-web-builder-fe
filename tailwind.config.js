/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor:"#4b5563",
        buttonColor:"#3b82f6"
      }
    },
  },
  plugins: [],
}

