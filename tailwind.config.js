/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1s ease-in 5s forwards ",
      },
      keyframes: {
        "fade-in": {
          from: { transform: "translateY(-200px)", opacity: "0" },
          to: { transform: "translateY(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
