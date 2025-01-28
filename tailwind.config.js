/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#2b5934',
        'farm-yellow': '#f5e6c8',
        'farm-brown': '#5c4b3a',
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
