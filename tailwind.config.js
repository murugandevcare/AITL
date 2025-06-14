/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'tamil-regular': "NotoSansTamil-Regular",
        'tamil-medium': "NotoSansTamil-Medium",
        'tamil-bold': "NotoSansTamil-Bold",
        'tamil-black': "NotoSansTamil-Black",

        'roboto-regular': "Roboto-Regular",
        'roboto-medium': "Roboto-Medium",
        'roboto-bold': "Roboto-Bold",
        'roboto-black': "Roboto-Black",
      },
      colors: {
        'theme-color': "#58c056",
      },
    },
  },
  plugins: [],
}
