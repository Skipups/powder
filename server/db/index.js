const { db } = require("./db");
const { Pass } = require("./models/pass");
const { Resort } = require("./models/resort");

//associations
Pass.belongsToMany(Resort, { through: "ResortPass" });
Resort.belongsToMany(Pass, { through: "ResortPass" });

module.exports = {
  Pass,
  Resort,
  db,
};
