/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        gray: "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",

        "primary-dark": "var(--primary-dark)",
        "primary-text": "var(--primary-text)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
