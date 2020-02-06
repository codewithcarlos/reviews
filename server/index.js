const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const db = require("../db/index");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.get("/listings", (req, res) => {
  db.getReviewsForUser(req.query.id, (err, data) => {
    if (err) {
      return res.status(404).send("listing not found");
    }
    res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
