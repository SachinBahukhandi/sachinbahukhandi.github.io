module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  // images: {
  //   unoptimized: true,
  // },
  // output: "export",
};
