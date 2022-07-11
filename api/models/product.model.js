const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  imgUrl: {
    type: String,
    required: false,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGfoR24g82fsdyUuCCIb672C6sh1hQStEKw&usqp=CAU",
  },
  price: {
    type: Number,
    required: [true, "Price field is required."],
  },
});

module.exports = mongoose.model("products", ProductSchema);
