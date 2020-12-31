const Product = require("../database/models/Product");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const SuccessResponse = require("../model/SuccessResponse");

exports.getAll = asyncMiddleware(async (req, res, next) => {
  const products = await Product.findAll();
  res.json(new SuccessResponse(200, products));
});

exports.createNewProduct = asyncMiddleware(async (req, res, next) => {
  const { name, quantity_in_stock, unit_price } = req.body;
  const newProduct = await Product.create({
    name,
    quantity_in_stock,
    unit_price,
  });
  res.json(new SuccessResponse(200, newProduct));
});
