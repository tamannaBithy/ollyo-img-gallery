/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "rgb(161 161 170)",
      },
      screens: {
        "3xl": "4000px",
      },
    },
  },
  plugins: [],
};
