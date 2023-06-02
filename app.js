const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = 3000;

const connectMongo = require("./config/database");
connectMongo();

const { uploadMiddleware } = require("./middleware/uploadMiddleware");

const categoryRoutes = require("./routes/productRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", categoryRoutes);

app.use(uploadMiddleware);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
