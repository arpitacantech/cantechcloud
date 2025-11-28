/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 0.8s ease-out forwards',
        'zoom-in-delay': 'zoom-in 0.8s ease-out 0.3s forwards', // delayed animation for list
        'zoom-in-delay2': 'zoom-in 0.8s ease-out 0.6s forwards', // delayed animation for button
      },
    },
  },
  plugins: [],
};
