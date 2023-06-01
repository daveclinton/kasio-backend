const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Db is connected successfully");
  } catch (error) {
    console.log(`Error connecting to Database, ${error.message}`);
  }
};

module.exports = dbConnect;
