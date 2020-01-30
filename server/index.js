const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const db = require("../db/index");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.get("/listings", (req, res) => {
//   console.log("hello");
// });

app.get("/user/:id", (req, res) => {
  console.log("the params are:", req.params);
  db.getReviewsForUser(req.params.id, (err, data) => {
    if (err) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(data);
  });
});

app.get("/listings/:id", (req, res) => {
  console.log("hello", req.params);
  let test = path.join(__dirname, "..", "client", "dist", "index.html");
  // res.sendFile(test);
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
