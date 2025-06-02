

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // include all files using Tailwind classes
  ],
  theme: {
    extend: {
              colors: {
        // Add your custom colors here
        brand: {
          light: '#f3e8ff',
          DEFAULT: '#9333ea',
          dark: '#6b21a8',
        },
        gold: '#FFD700',
        midnight: '#121063',
      },
    }, // add custom styles here
  },
  plugins: [],
}
