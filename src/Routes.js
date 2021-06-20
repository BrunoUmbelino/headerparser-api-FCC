const express = require("express");
const Routes = express.Router();

Routes.get("/api/hello", function (req, res) {
  res.json({ greetings: "Hello" });
});

Routes.get("/api/whoami", (req, res) => {
  const headers = req.headers;

  const host = headers.host;
  const userAgent = headers["user-agent"];
  const acceptLanguage = headers["accept-language"];

  res.json({ ipadress: host, software: userAgent, language: acceptLanguage });
});

module.exports = Routes;
