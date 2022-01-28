const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
app = express();

require("./startup/db")();
require("./startup/routes")(app);
require("./startup/updateDb")();

const port = process.env.PORT || 3000;
const server = app.listen(port);

module.exports = server;
