const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectMongo = require("./config/database");
connectMongo();

const categoryRoutes = require("./routes/productRoutes");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", categoryRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
