module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        orange: { A200: "#efb23b" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        teal: { 700: "#008163" },
        red: { 600: "#ee2526" },
        yellow: { 900: "#f4811f" },
        white: { A700: "#ffffff" },
        gray: { 50: "#fff9f5", 100: "#f5f5f5" },
      },
      fontFamily: { lexend: "Lexend" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
