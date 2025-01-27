module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans], // Use Manrope as the default sans-serif font
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
    },
  },
  plugins: [],
};
