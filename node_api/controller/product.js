const router = require("express").Router();
const {
  getAllProducts,
  getProduct,
} = require("./_product.functions");

// get all products
router.get("/all", getAllProducts);

// get single product by ID
router.get("/:id", getProduct);

module.exports = router;