const express = require("express");

// Server
const app = express();

// Routes
const routes = require("./config/routes");
const { setupProxies } = require("./config/proxy");

// Server configuration
app.use(express.json());

// Proxy configuration
setupProxies(app, routes);

module.exports = app;
