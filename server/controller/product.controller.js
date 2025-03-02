const Product = require("../model/product");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      res.status(404).json({ message: "No Products found" });
    }
    res.status(200).json({ message: "Fetching Products", data: products });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

exports.getProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "No Product found" });
    }

    res.status(200).json({ message: "Fetching Product", data: product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

exports.addProducts = async (req, res, next) => {
  const { title, imageUrl, brand, sizes, colors, price, description } =
    req.body;

  try {
    if (
      !title ||
      !imageUrl ||
      !brand ||
      !sizes ||
      !colors ||
      !price ||
      !description
    ) {
      res.status(422).json({ message: "Please fill in the fields" });
    }

    const addProduct = new Product({
      title,
      imageUrl,
      brand,
      sizes,
      colors,
      price,
      description,
    });

    const result = await addProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", data: result });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const { title, imageUrl, brand, sizes, colors, price, description } =
    req.body;

  try {
    if (
      !title ||
      !imageUrl ||
      !brand ||
      !sizes ||
      !colors ||
      !price ||
      !description
    ) {
      return res.status(422).json({ message: "Please fill in all fields" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, imageUrl, brand, sizes, colors, price, description },
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(400).json({ message: "Product update failed" });
    }

    res
      .status(200)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (err) {
    console.error("Error updating product:", err);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};
