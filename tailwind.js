const { fontFamily, colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    colors: {
      ...colors,
      primary: "#D0975F",
    },
    fontFamily: {
      ...fontFamily,
      sans: ['"Oxygen"', ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
