/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Semantic color aliases (optional - using default Tailwind colors works great)
      colors: {
        // Already using Tailwind's excellent gray scale and blue
        // Keeping it simple - no custom colors needed
      },
      
      // Custom spacing if needed (Tailwind defaults are perfect for this design)
      spacing: {
        // Examples: '18': '4.5rem', '88': '22rem'
      },
      
      // Animation helpers
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
