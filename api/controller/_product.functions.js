const ProductModel = require("../models/product.model");
const { sendResponse, sendError } = require("./_helper");

const getAllProducts = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getAllProducts");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

const getProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.findById(req.params.id);
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: `product ${req.params.id}`,
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};