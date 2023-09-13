// routes/categoryRoutes.js

const express = require("express");
const router = express.Router();
const CategoriesController = require("../Controllers/categoriesController");

// GET all categories
router.get("/", CategoriesController.getAllCategories);

// POST create a new category
router.post("/", CategoriesController.createCategory);

module.exports = router;
