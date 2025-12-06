/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'custom-blue': '#1a2b3c', // Define your custom color with a name and hex value
        'brand-primary': '#FF5733',
        'reviewGreen':'#c9dcd1', // Another example
      },
  },
  plugins: [],
}
