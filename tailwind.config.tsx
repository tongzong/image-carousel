// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind to use the presence of the 'dark' class on the html element
  // instead of the browser's system preference (which is the default 'media').
  darkMode: 'class',
  
  content: [
    // ... your file paths
  ],
  theme: {
    extend: {
      // You don't necessarily need to add the colors here if you use
      // the CSS variable approach in globals.css, but you can:
      colors: {
        // This is often a good practice to centralize your custom utilities:
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
    },
  },
  plugins: [],
}