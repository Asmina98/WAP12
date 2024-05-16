const express = require("express");
const path = require('path')
const productController = require('../controller/productController')

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/products", productController.productController );

module.exports = router;
