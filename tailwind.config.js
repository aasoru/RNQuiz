const { plugin } = require("twrnc");
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        primary: "#F3C1FF",

        secondary: {
          100: "#F3C1FF",
          300: "#D74FFA",
          500: "#B903E7",
          700: "#9A00C0",
          950: "#680085",
        },
        gray: {
          white: "#FFFFFF",
          light: "#95949B",
          medium: "#242531",
          dark: "#141524",
          black: "#000000",
        },
        success: "#00C74F",
        error: "#F20707",
        info: "#21A7F9",
        alert: "#FFE600",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        btnBg: `rounded bg-[#1fb6ff] text-white p-3`,
        btnText: `text-white uppercase font-bold`,
        "body-text": `font-serif leading-relaxed tracking-wide text-gray-800`,
      });
    }),
  ],
};
