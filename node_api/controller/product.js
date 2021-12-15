const router = require("express").Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
} = require("./_product.functions");

// get all products
router.get("/all", getAllProducts);

// get single product by ID
router.get("/:id", getProduct);

// create product
router.put("/create", createProduct);

// delete product by ID
router.delete("/delete", deleteProduct);

module.exports = router;