const express = require("express");
const path = require("path");
const snow = require("snow-forecast-sfr").default;
const chalk = require("chalk");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const apiPasses = require("./api/passes");

app.use(express.json());

app.use(express.static(path.join(__dirname, "../static")));

app.use("/api", apiPasses);

app.get("/api/snowRequest", (req, res) => {
  snow.parseResort("Snowbird", "mid", function (json) {
    console.log(json);
    return res.status(200).send(JSON.stringify(json));
  });
});

//app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});
const startServer = () => {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`App started on ${PORT}`));
  });
};

module.exports = startServer;
