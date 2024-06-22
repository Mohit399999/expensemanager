/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "nav-bar": "#04068a",
        black: "#000",
        whitesmoke: "#efefef",
        darkslateblue: "#404183",
        gray: "#847d7d",
        snow: "#fffafa",
        royalblue: "#2148c0",
      },
      spacing: {},
      fontFamily: {
        navbar: "Inter",
        h2: "Raleway",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "11xl": "30px",
        mid: "17px",
        "8xs-1": "4.1px",
      },
    },
    fontSize: {
      "lgi-1": "19.1px",
      "36xl": "55px",
      lg: "18px",
      base: "16px",
      "26xl": "45px",
      mini: "15px",
      "3xl": "22px",
      "13xl": "32px",
      "lgi-3": "19.3px",
      "23xl": "42px",
      xs: "12px",
      mid: "17px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
