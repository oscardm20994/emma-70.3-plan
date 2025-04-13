module.exports = {
  experimental: {
    appDir: true,  // Enable experimental features if necessary
  },
  async redirects() {
    return [
      {
        source: '/old-url',
        destination: '/new-url',
        permanent: true,
      },
    ]
  },
};

