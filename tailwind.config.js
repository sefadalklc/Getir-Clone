/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        "0.1" : "0.063rem",
      },
      colors: theme => ({
        "brand-color" : "#4c3398",
        "primary-brand-color" : "#5d3ebc",
        "secondary-brand-color" : "#7849f7",
        "brand-yellow" : "#ffd300"
      }),
     
    },
  },
  plugins: [],
}