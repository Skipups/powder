const Sequelize = require("sequelize");

const { db } = require("../db.js");

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "guestEmail@gmail.com",
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "guestPwd",
    validate: {
      notEmpty: true,
    },
  },
  // favoriteResorts: {
  //   type: Sequelize.ENUM,
  //   values: [],
  // },
  userType: {
    type: Sequelize.ENUM,
    values: ["pending", "loggedIn", "guest"],
    defaultValue: "guest",
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = { User };
