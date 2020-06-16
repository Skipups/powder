const express = require("express");
const path = require("path");
const chalk = require("chalk");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const apiPasses = require("./api/passes");
const apiSnowRequest = require("./api/snowRequest");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../static")));

app.use("/api", apiPasses);
app.use("/api", apiSnowRequest);

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
