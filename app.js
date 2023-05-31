const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.send("Here");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
