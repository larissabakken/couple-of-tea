/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        christmas: "url('/assets/christmas.jpeg')",
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 4s ease-out 1s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      filter: ['hover', 'focus'],
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%': { width: '1ch' },
          '10%': { width: '2ch' },
          '15%': { width: '3ch' },
          '20%': { width: '4ch' },
          '25%': { width: '5ch' },
          '30%': { width: '6ch' },
          '35%': { width: '7ch' },
          '40%': { width: '8ch' },
          '45%': { width: '9ch' },
          '50%': { width: '10ch' },
          '55%': { width: '11ch' },
          '60%': { width: '12ch' },
          '65%': { width: '13ch' },
          '70%': { width: '14ch' },
          '75%': { width: '15ch' },
          '80%': { width: '16ch' },
        },
      },
    },
  },
  plugins: [],
}
