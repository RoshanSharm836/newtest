const express = require("express");
const app = express();
var cors = require("cors");
const connection = require("./db/config");
const router = require("./Routes/test.model");

app.use(cors());

app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
  connection();
});
