// controllers/categoriesController.js

const Categories = require("../Models/Categories");

const CategoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Categories.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Category name is required" });
      }

      // Check if the category already exists
      const existingCategory = await Categories.findOne({ name });

      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
      }

      const category = new Categories({ name });
      const savedCategory = await category.save();
      res.json(savedCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = CategoriesController;
