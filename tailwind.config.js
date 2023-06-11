/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  options: {
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
