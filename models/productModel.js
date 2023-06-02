const mongoose = require("mongoose");

// Custom validator function to check for presence
function presenceValidator(value) {
  return value || this.isNew;
}

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required"],
      validate: {
        validator: presenceValidator,
        message: "Name field cannot be empty",
      },
    },
    image: {
      data: { type: Buffer },
      contentType: {
        type: String,
        required: [true, "Content type is required"],
        validate: presenceValidator,
      },
    },
    subCategories: [
      {
        name: {
          type: String,
          required: [true, "Subcategory name is required"],
          validate: {
            validator: presenceValidator,
            message: "Subcategory name field cannot be empty",
          },
        },
        products: [
          {
            brand: {
              type: String,
              required: [true, "Product brand is required"],
              validate: presenceValidator,
            },
            name: {
              type: String,
              required: [true, "Product name is required"],
              validate: presenceValidator,
            },
            price: {
              type: Number,
              required: [true, "Product price is required"],
              validate: presenceValidator,
            },
            shop: {
              type: String,
              required: [true, "Shop name is required"],
              validate: presenceValidator,
            },
            image: {
              data: { type: Buffer },
              contentType: {
                type: String,
                required: [true, "Product image content type is required"],
                validate: presenceValidator,
              },
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

// Set required fields to false during updates
categorySchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  this.options.context = "query";
  next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
