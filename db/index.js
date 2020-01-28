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

function getReviewsForListing(listing_id) {
  let qryStr = `SELECT b.* from listings a LEFT JOIN feedback b ON a.user_id = b.user_id WHERE a.user_id = 124581118 and message IS NOT NULL LIMIT 7;`;
}

module.exports = { db };
