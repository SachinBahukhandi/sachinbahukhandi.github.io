module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  // images: {
  //   unoptimized: true,
  // },
  // output: "export",
};
