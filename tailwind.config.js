/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/src/assets/images/bg.png')",
      },
      colors: {
        background: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
