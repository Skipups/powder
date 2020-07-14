const { Router } = require("express");
const chalk = require("chalk");
const apiResortRequest = Router();
const { Resort } = require("../db/index");

apiResortRequest.get("/resortRequest/:resortName", (req, res, next) => {
  let resort = req.params.resortName;
  console.log(chalk.blueBright("!!!!!!!!!!", resort));
  Resort.findOne({ where: { name: resort } })
    .then((foundResort) => {
      res.status(200).send(foundResort);
    })
    .catch((e) => next());
});

module.exports = apiResortRequest;
