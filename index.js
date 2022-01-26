const express = require("express");
app = express();

// require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port);

module.exports = server;
