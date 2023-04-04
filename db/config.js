const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(
    "mongodb+srv://roshan836sharma:CH0QMBVVwSFgR2Bk@cluster0.tp7gxuo.mongodb.net/?retryWrites=true&w=majority"
  );
});

module.exports = connection;
