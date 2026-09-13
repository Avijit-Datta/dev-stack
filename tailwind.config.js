/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#111111",
        textSecondary: "#C9C5D2",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #28BDB4 0%, #6388D2 52%, #9B3DDA 100%)",
      },
    },
  },
  plugins: [],
};
