const { db } = require("./db");
const { User } = require("./models/user");
const { Pass } = require("./models/pass");
const { Resort } = require("./models/resort");

//associations
User.belongsTo(Pass, { foreignKey: "passId" });
Pass.hasMany(User, { as: "passHolder" });

Resort.belongsToMany(Pass, {
  through: "ResortsPasses",
  foreignKey: "resortId",
});
Pass.belongsToMany(Resort, {
  through: "ResortsPasses",
  foreignKey: "passId",
});

module.exports = {
  Pass,
  User,
  Resort,
  db,
};
