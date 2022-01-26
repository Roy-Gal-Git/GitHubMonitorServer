const express = require("express");

const router = express.Router();

// This is a test
router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
