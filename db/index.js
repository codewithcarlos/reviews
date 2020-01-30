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

function getReviewsForUser(user_id, callback) {
  let qryStr = `SELECT b.* from listings a LEFT JOIN feedback b ON a.user_id = b.user_id WHERE a.user_id = '${user_id}' and message IS NOT NULL;`;
  SELECT b.* from listings a LEFT JOIN feedback b ON a.user_id = b.user_id WHERE a.user_id = '234858692' and message IS NOT NULL;
  db.query(qryStr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
}

module.exports = { db, getReviewsForUser };
