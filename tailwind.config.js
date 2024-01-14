/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill, 300px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
