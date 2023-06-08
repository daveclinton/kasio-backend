const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const bodyParser = require("body-parser");

// Increase payload size limit to 10MB
router.use(bodyParser.json({ limit: "10mb" }));
router.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

router.post("/categories", categoryController.createCategory);
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:id", categoryController.getCategoryById);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
