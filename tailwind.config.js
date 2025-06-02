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
        'primary': '#105459',
        'primary-dark': '#0C3F42',
        'secondary': '#F2DEA2',
        'secondary-dark': '#E0CC90',
        'bg-sand': '#F2DEA2',
        'bg-sand-light': '#F7E8BB',
        'text-dark': '#2A3B3C',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};

