const mysql = require("mysql");
const { db_password } = require("../config.js");

const db = mysql.createConnection({
  host: "localhost",
  // host: "database-1.cuyvfkjn1z4t.us-east-1.rds.amazonaws.com",
  user: "root",
  // password: `${db_password}`,
  password: `password`,
  database: "etsy_reviews",
  charset: "utf8mb4"
});

db.connect();

function getReviewsForUser(listing_id, callback) {
  let qryStr = `SELECT 
  b.*, 
  a.reviews_count,
  c.image_url,
  a.listing_id,
  a.title
FROM listings a 
LEFT JOIN feedback b 
  ON a.user_id = b.user_id
LEFT JOIN (SELECT * FROM images WHERE listing_id = '${listing_id}' LIMIT 1) as c
  ON a.listing_id = c.listing_id
WHERE a.listing_id = '${listing_id}'
ORDER BY b.reviewDate DESC
LIMIT 4
;`;

  db.query(qryStr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
}

module.exports = { db, getReviewsForUser };
