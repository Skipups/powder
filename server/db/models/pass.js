const Sequelize = require("sequelize");
const { db } = require("../db.js");

//define pass model

const Pass = db.define("pass", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: "https://www.ikonpass.com/static/images/Facebook-Large.jpg",
  },
});

module.exports = { Pass };
