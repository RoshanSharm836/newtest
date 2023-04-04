const express = require("express");
const test = require("../Schema/test.schema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await test.find();
    console.log("data", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await test.create(req.body);
    return res.status(200).send({ data: "posted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
