const { Router } = require("express");
const { Pass, Resort } = require("../db/index");
const chalk = require("chalk");

const apiPasses = Router();

apiPasses.get("/passes", (req, res, next) => {
  Pass.findAll()
    .then((foundPasses) => {
      res.status(200).send(foundPasses);
    })
    .catch((e) => next());
});

apiPasses.get("/passes/:selectedPass", (req, res, next) => {
  let selectedPass = req.params.selectedPass;
  Pass.findOne({ where: { name: selectedPass }, include: [{ model: Resort }] })

    .then((foundPass) => res.status(200).send(foundPass))
    .catch((e) => next());
});

module.exports = apiPasses;
