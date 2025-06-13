const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
      },
      backgroundImage: {
        "pattern-cross":
          "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "pattern-cross": "40px 40px",
      },
      backgroundPosition: {
        "pattern-cross": "0 0, 20px 20px",
      },
      colors: {
        primary: '#0d1b2a',
        secondary: '#1b263b',
        accent: '#415a77',
        muted: '#778da9',
        light: '#e0e1dd',
        'custom-gray': '#f4f4f4', // Custom gray
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional plugin for typography
  ],
};
