const express = require("express");
const cors = require("cors");

// Server
const app = express();

// Routes
const routes = require("./config/routes");
const { setupProxies } = require("./config/proxy");

// Proxy configuration
setupProxies(app, routes);

// Server configuration
app.use(express.json());
app.use(cors("*"));

module.exports = app;
