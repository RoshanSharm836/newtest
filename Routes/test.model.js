const express = require("express");
const test = require("../Schema/test.schema");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("data");
  try {
    const data = await test.find();
    return res.status(200).send("data");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
