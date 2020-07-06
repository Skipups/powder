const { db } = require("./db");
const { User } = require("./models/user");
const { Pass } = require("./models/pass");
const { Resort } = require("./models/resort");

//associations
// User.belongsTo(Pass, { foreignKey: "passId" });
// Pass.hasMany(User, { as: "passHolder" });
Pass.belongsToMany(Resort, { through: "ResortPass" });

Resort.belongsToMany(Pass, { through: "ResortPass" });

module.exports = {
  Pass,
  User,
  Resort,
  db,
};
