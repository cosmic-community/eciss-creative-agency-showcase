/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: "#1f2937",
        mist: "#f8fafc",
        steel: "#64748b",
        accent: "#0ea5e9"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};