const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

const app = express();

const PORT = 3000;

const connectMongo = require("./config/database");

connectMongo();

const categoryRoutes = require("./routes/productRoutes");

const { uploadMiddleware } = require("./middleware/uploadMiddleware");
app.use(cors());
app.use(express.json());
app.use(uploadMiddleware);

app.use("/api", categoryRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
