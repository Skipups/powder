const { Router } = require("express");
const chalk = require("chalk");
const snow = require("snow-forecast-sfr").default;
const { cleanedResortString } = require("../../Utils.js");

const apiSnowRequest = Router();

apiSnowRequest.post("/snowRequest", (req, res) => {
  let resort = req.body.resortName;
  let cleaned = cleanedResortString(resort);

  snow.parseResort(cleaned, "mid", function (json) {
    res.status(200).send(json);
    return;
  });
});

module.exports = apiSnowRequest;
