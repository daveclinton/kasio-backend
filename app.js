const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = 3000;

const connectMongo = require("./config/database");

connectMongo();

const categoryRoutes = require("./routes/productRoutes");

const { uploadMiddleware } = require("./middleware/uploadMiddleware");

app.use(uploadMiddleware);

app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
