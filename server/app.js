const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses form data

const PREFIX = process.env.API_PREFIX;
const productRoutes = require("./routes/product.routes");

app.use(`/${PREFIX}`, productRoutes);

const startServer = async () => {
  await mongoose.connect(
    "mongodb+srv://suhayb:s3ew8AVqpgb9BScF@cluster0.nhc1c.mongodb.net/void?retryWrites=true&w=majority&appName=Cluster0",
  );
  console.log("Server Connected");
  app.listen(3000);
};

startServer();
