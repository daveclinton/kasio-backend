const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
// const { uploadMiddleware } = require("../middleware/uploadMiddleware");

router.post("/categories", categoryController.createCategory);

router.get("/categories", categoryController.getAllCategories);

router.get("/categories/:id", categoryController.getCategoryById);

router.put("/categories/:id", categoryController.updateCategory);

router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
