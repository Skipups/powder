const Sequelize = require("sequelize");
const { db } = require("../db.js");

//resort model defined
const Resort = db.define("resort", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  closestAirCode: {
    type: Sequelize.STRING,
  },
});

module.exports = { Resort };
