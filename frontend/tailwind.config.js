/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // path to all js, jsx, ts, and tsx files
    // Add any other paths here that may contain Tailwind CSS classes
  ],
  theme: {
    extend: {
      // You can extend the theme here
      colors: {
        'custom-blue': '#243c5a', // example of adding a custom color
        // Add other custom colors, fonts, breakpoints, etc.
      },
      spacing: {
        '72': '18rem', // example of adding a new spacing value
        // Add other custom spacing values
      },
      // Extend other theme properties as needed
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you need here
    // require('@tailwindcss/forms'), // uncomment if you installed the forms plugin
    // require('@tailwindcss/typography'), // uncomment if you installed the typography plugin
    // Add other plugins as needed
  ],
}


