const Category = require("../models/productModel");
const formidable = require("formidable");

const createCategory = async (req, res) => {
  try {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "Invalid data" });
      }

      const { name, subcategories } = fields;
      const { image } = files;

      const category = new Category({ name, subcategories, image });

      try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
      } catch (error) {
        res.status(400).json({ error: "Failed to save category" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, subcategories } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, image, subcategories },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndRemove(id);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
