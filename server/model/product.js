const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  brand: { type: String, required: true },
  sizes: { type: [String], required: true },
  colors: { type: [String], required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
