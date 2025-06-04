/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cluster-green': '#2E7D32',
        'cluster-brown': '#5D4037',
        'cluster-gold': '#FBC02D',
        'cluster-blue': '#0288D1',
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

