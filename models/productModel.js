const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name field is Required",
  },
  image: {
    data: { type: Buffer },
    contentType: { type: String, required: "Content type is required" },
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
          image: {
            data: { type: Buffer },
            contentType: { type: String, required: true },
          },
        },
      ],
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
