/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        "brand-color" : "#4c3398",
        "primary-brand-color" : "#5d3ebc",
        "secondary-brand-color" : "#7849f7",
      }),
      gradientColorStops: theme => ({
        "brand-color" : "#4c3398",
        "primary-brand-color" : "#5d3ebc",
        "secondary-brand-color" : "#7849f7",
      }),
    },
  },
  plugins: [],
}