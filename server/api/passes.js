const { Router } = require("express");
const { Pass } = require("../db/index");
const chalk = require("chalk");

const apiPasses = Router();

apiPasses.get("/passes", (req, res, next) => {
  Pass.findAll()
    .then((foundPasses) => {
      res.status(200).send(foundPasses);
    })
    .catch((e) => next());
});

module.exports = apiPasses;
