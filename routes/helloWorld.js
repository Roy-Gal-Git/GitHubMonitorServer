const express = require("express");

const router = express.Router();

// This is a test
router.get("/", (req, res) => {
  res.setHeader("<h1>", "Hello World!").send();
});

module.exports = router;
