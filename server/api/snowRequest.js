const { Router } = require("express");
const chalk = require("chalk");
const snow = require("snow-forecast-sfr").default;

const apiSnowRequest = Router();

apiSnowRequest.get("/api/snowRequest", (req, res) => {
  console.log("hi");
  let resort = req.params;
  console.log(chalk.bgCyanBright(`req and resort`, req, resort));

  snow.parseResort(resort, "mid", function (json) {
    console.log(json);
    return res.status(200).send(JSON.stringify(json));
  });
});

module.exports = apiSnowRequest;
