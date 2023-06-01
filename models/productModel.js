const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: { type: Buffer },
    contentType: { type: String, required: true },
  },
  subCategories: [
    {
      name: { type: String, required: true },
      products: [
        {
          brand: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
          shop: { type: String, required: true },
          image: { type: String, required: String },
        },
      ],
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
