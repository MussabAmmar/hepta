/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abril: ['Abril Fatface', 'sans-serif'],
        mukta: ['Mukta Mahee', 'sans-serif'],
      },
      backgroundImage: {
        'hero-background': "url('./assets/images/background_image.jpeg')",
      },
      colors: {
        teal: '#65C0BA',
      },
    },
  },
  plugins: [],
};
