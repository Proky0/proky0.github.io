/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pink-400': '#ff00ff',
        'purple-400': '#9d00ff',
        'gray-800': '#1f1f1f',
        'gray-900': '#0d0d0d',
      },
      fontFamily: {
        orbitron: ['Orbitron']
      },
    },
  },
  plugins: [],
};
