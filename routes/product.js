const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.getAll)
  .post(productController.createNewProduct);

module.exports = router;
