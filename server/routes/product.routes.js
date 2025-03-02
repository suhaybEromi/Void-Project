const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.get("/products", productController.getProducts);

router.get("/products/:id", productController.getProduct);

router.post("/products", productController.addProducts);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
