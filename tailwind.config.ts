/** @type {import('tailwindcss').Config} */
import plugin from "tailwind-scrollbar";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "#201625",
        primary: "#1B1220",
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }),
    // This will add utilities such as scrollbar-thumb-rounded or scrollbar-thumb-rounded-md
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
