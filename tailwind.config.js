module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        FullSliderBar: "hsl(174, 77%, 80%)",
        StrongCyan: "hsl(174, 86%, 45%)",
        LightGrayishRed: "hsl(14, 92%, 95%)",
        LightRed: "hsl(15, 100%, 70%)",
        PaleBlue: " hsl(226, 100%, 87%)",
        White: "hsl (0, 0%, 100%)",
        VeryPaleBlue: "hsl(230, 100%, 99%)",
        LightGrayishBlueOne: "hsl(224, 65%, 95%)",
        LightGrayishBlueTwo: "hsl(223, 50%, 87%)",
        GrayishBlue: "hsl(225, 20%, 60%)",
        DarkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/my-project/src/images/bg-pattern.svg')",
      },
    },
    fontFamily: {
      Manrope: ["Manrope, sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
