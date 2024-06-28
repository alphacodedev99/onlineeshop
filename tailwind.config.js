/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBlue': '#003F62',
        'mainYellow': '#EDA415',
        'ligthGray': '#F4F4F4',
        'textWhite': '#FFF',
        'textDark': '#292D32',
        'ligthBlue': '#B3D4E5',
        'grayColor': '#B6B6B6'
      }
    },
  },
  plugins: [],
}

