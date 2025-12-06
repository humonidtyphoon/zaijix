/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zaijix Brand Colors
        primary: {
          DEFAULT: '#0A2A43',
          blue: '#0A2A43',
        },
        secondary: {
          DEFAULT: '#1F5F8B',
          blue: '#1F5F8B',
        },
        accent: {
          DEFAULT: '#4FB3BF',
          teal: '#4FB3BF',
        },
        neutral: {
          dark: '#1B1B1B',
          light: '#F5F7F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}