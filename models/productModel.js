const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    data: Buffer,
    contentType: String,
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    image: {
      type: imageSchema,
      required: [true, "Product image is required"],
    },
    shop: {
      type: String,
      required: [true, "Shop name is required"],
    },
  },
  { _id: false }
);

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subcategory name is required"],
  },
  products: [productSchema],
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
  image: {
    type: imageSchema,
    required: [true, "Category image is required"],
  },
  subcategories: [subcategorySchema],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
