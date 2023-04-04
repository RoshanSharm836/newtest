const mongoose = require("mongoose");

// mongoose schema is used for giving structure and getting some of the perdefined function
const testschema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const test = mongoose.model("test", testschema);
module.exports = test;
