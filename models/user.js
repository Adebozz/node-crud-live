const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
