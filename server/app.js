const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());
const productRoutes = require("./routes/product.routes");

app.use(productRoutes);

app.listen(3000, () => console.log("Running..."));
