/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "section-gray": "#626262",//definicja zmiennej - jej nazwy i jej wartosci
        "nav-btn-gray-dark": "#9B9B9B",
        "nav-dark": "#656565"
      }
    },
  },
  plugins: [],
}

