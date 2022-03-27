const routes = [
  {
    url: "/books",
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: "https://www.googleapis.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/books`]: "/books/v1/volumes",
      },
    },
  },
  {
    url: "/premium",
    auth: true,
    creditCheck: true,
    proxy: {
      target: "https://www.google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/premium`]: "",
      },
    },
  },
  {
    url: "/comments",
    auth: false,
    creditCheck: true,
    proxy: {
      target: "http://localhost:3000",
      changeOrigin: true,
      // pathRewrite: {
      //   [`^/commentos`]: "/comments",
      // },
    },
  },
];

module.exports = routes;
