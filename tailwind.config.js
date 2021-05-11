module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#01203A",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
