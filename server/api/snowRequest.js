const { Router } = require("express");
const chalk = require("chalk");
const snow = require("snow-forecast-sfr").default;

const apiSnowRequest = Router();
console.log("outside of get request");
apiSnowRequest.get(`/`, (req, res) => {
  console.log("inside apiSnowRequest req", req);
  let resort = req.params;
  console.log(chalk.bgCyanBright(`req and resort`, req, resort));

  snow.parseResort(resort, "mid", function (json) {
    console.log(json);
    return res.status(200).send(JSON.stringify(json));
  });
});

module.exports = apiSnowRequest;

//why isn't line 8 logging
// why did i need to use fetch and not axios?
