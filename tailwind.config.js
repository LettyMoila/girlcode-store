/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/src/assets/heroBackground.jpg')",
        'page-header': "url('/src/assets/cat-header.jpg')",
      },
      colors:
      {
        'girlcode-pink': "#e94154"
      }
    },
  },
  plugins: [],
}

