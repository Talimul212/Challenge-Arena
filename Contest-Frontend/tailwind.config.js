/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    primary: "#00bf63",
    secondary: "#38b6ff",
    extend: {},
  },
  plugins: [require("daisyui")],
};
