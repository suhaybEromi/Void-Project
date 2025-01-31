const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(3000, () => console.log("Running..."));
