const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en", // linguagem padrão
    localeDetection: false,
    localePath: path.resolve("./public/locales"), //por padrão o next já identifica o local onde está os locales.
    // se os locales estiver na pasta public em desenvolvimento, porem na vercel não identifica.
  },
};
