module.exports = {
  sass: true,
  modules: true,
  images: {
    domains: [
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
      "kiddo.cdn.prismic.io",
    ],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-ca"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-ca",
  },
};
