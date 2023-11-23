/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwind-fontawesome")({
      version: 6,
    }),
  ],
};
