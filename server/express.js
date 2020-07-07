const express = require("express");
const path = require("path");
const chalk = require("chalk");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
const apiPasses = require("./api/passes");
const apiSnowRequest = require("./api/snowRequest");
const apiFlightRequest = require("./api/flightRequest");
const apiResortRequest = require("./api/resortRequest");

const morgan = require("morgan");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "../static")));

app.use("/api", apiPasses);
app.use("/api", apiSnowRequest);
app.use("/api", apiFlightRequest);
app.use("/api", apiResortRequest);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});
const startServer = () => {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`App started on ${PORT}`));
  });
};

module.exports = startServer;
