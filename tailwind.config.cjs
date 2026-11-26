/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: '#0b0b0b',
        surface: '#121212',
        accent: '#d9532f',
        amberWarm: '#d48b3b',
      },
    },
  },
  plugins: [],
}
