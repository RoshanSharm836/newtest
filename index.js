const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");
const connection = require("./db/config");
const router = require("./Routes/test.model");

app.use(cors());

app.use(express.json());

app.use("/", router);

app.use(express.static(path.join(__dirname, "./app/build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./app/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
  connection();
});
