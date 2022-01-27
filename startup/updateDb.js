const cron = require("node-cron");

module.exports = function () {
  let couter = 0;
  cron.schedule("*/10 * * * * *", function () {
    couter += 1;
    console.log(`Hello World! ${couter}`);
  });
};
