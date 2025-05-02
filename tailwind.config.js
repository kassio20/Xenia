/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for Imóveis Estruturar branding
        'estruturar-green': {
          400: '#4ade80', 
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
    },
  },
  plugins: [],
};

