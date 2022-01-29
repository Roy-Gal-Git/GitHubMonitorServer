const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.set("Content-Type", "text/html").send("<h1>Hello World!</h1>");
});

module.exports = router;
