const express = require("express");
const cors = require('cors');
require("dotenv").config({ path: __dirname + "/.env" });
app = express();

app.use(cors({
  origin: '*'
}));

require("./startup/db")();
require("./startup/routes")(app);
require("./startup/updateDb")();

const port = process.env.PORT || 3001;
const server = app.listen(port);

module.exports = server;
