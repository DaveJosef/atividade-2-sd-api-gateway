const dotenv = require("dotenv");
dotenv.config();

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
    url: "/comments",
    auth: false,
    creditCheck: true,
    proxy: {
      target: process.env.COMMENTS_API_URL,
      changeOrigin: true,
      // pathRewrite: {
      //   [`^/commentos`]: "/comments",
      // },
    },
  },
];

module.exports = routes;
