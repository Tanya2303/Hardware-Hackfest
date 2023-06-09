/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3B4D",
        secondary: "#D0FEFE",
        tertiary: "#017374",
      },
      backgroundImage: {
        'parallex1': "url('./assets/alexandre-debieve-FO7JIlwjOtU-unsplash.jpeg')",
      }
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}

