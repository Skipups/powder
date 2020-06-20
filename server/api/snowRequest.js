const { Router } = require("express");
const chalk = require("chalk");
const snow = require("snow-forecast-sfr").default;

const apiSnowRequest = Router();

apiSnowRequest.post("/snowRequest", (req, res) => {
  let resort = req.body.resortName;

  const resortCleaned1 = resort.replace(/\s/g, "-");
  const resortCleaned2 = resortCleaned1.replace(/\./g, "");
  console.log(resortCleaned2);

  snow.parseResort(resortCleaned2, "mid", function (json) {
    res.status(200).send(json);
    return;
  });
});

module.exports = apiSnowRequest;
