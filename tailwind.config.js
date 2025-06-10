/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Tamil fonts (100-900)
        'tamil-100': ['NotoSansTamil-Thin'],
        'tamil-200': ['NotoSansTamil-ExtraLight'],
        'tamil-300': ['NotoSansTamil-Light'],
        'tamil-400': ['NotoSansTamil-Regular'],
        'tamil-500': ['NotoSansTamil-Medium'],
        'tamil-600': ['NotoSansTamil-SemiBold'],
        'tamil-700': ['NotoSansTamil-Bold'],
        'tamil-800': ['NotoSansTamil-ExtraBold'],
        'tamil-900': ['NotoSansTamil-Black'],

        // Roboto fonts (100-900)
        'roboto-100': ['Roboto-Thin'],
        'roboto-100-italic': ['Roboto-ThinItalic'],
        'roboto-200': ['Roboto-ExtraLight'],
        'roboto-200-italic': ['Roboto-ExtraLightItalic'],
        'roboto-300': ['Roboto-Light'],
        'roboto-300-italic': ['Roboto-LightItalic'],
        'roboto-400': ['Roboto-Regular'],
        'roboto-italic': ['Roboto-Italic'],
        'roboto-500': ['Roboto-Medium'],
        'roboto-500-italic': ['Roboto-MediumItalic'],
        'roboto-600': ['Roboto-SemiBold'],
        'roboto-600-italic': ['Roboto-SemiBoldItalic'],
        'roboto-700': ['Roboto-Bold'],
        'roboto-700-italic': ['Roboto-BoldItalic'],
        'roboto-800': ['Roboto-ExtraBold'],
        'roboto-800-italic': ['Roboto-ExtraBoldItalic'],
        'roboto-900': ['Roboto-Black'],
        'roboto-900-italic': ['Roboto-BlackItalic']
      },
    },
  },
  plugins: [],
}
