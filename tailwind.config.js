/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

