const mysql = require("mysql");
const { db_password } = require("../config.js");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `${db_password}`,
  database: "etsy_reviews",
  charset: "utf8mb4"
});

db.connect();

module.exports = { db };
