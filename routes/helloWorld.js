const express = require("express");

const router = express.Router();

// This is a test
// This is a second test
router.get("/", (req, res) => {
  res.send(<h1>Hello World!</h1>);
});

module.exports = router;
