const Sequelize = require("sequelize");
const chalk = require("chalk");

const pkg = require("../../package.json");

const dbName = process.env.NODE_ENV === "test" ? `${pkg.name}-test` : pkg.name;

console.log(chalk.yellow(`Opening database connection to ${dbName}`));
console.log(chalk.red(process.env.NODE_ENV));

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false,
  }
);
// const db = new Sequelize("postgres://localhost:5432/powder", {
//   logging: false,
// });

module.exports = { db };
