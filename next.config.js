module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.prismic.io',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'prismic-io.s3.amazonaws.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'kiddo.cdn.prismic.io',
          pathname: '**',
        },
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
  return nextConfig;
};