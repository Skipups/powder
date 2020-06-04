const Sequelize = require("sequelize");
const { db } = require("../db.js");

//resort model defined
const Resort = db.define("resort", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DECIMAL),
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_W6Fk6zrahr6VC3fqDP_E09uhvTKf821sz1lbuf35ZqNUC0Xr",
  },
  closestAirCode: {
    type: Sequelize.STRING,
  },
});

module.exports = { Resort };
