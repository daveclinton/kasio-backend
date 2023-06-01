const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kasio:pAssword12345@kasio.vfqulwp.mongodb.net/kasio?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Db is connected successfully");
  } catch (error) {
    console.log(`Error, ${error.message}`);
  }
};

module.exports = dbConnect;
