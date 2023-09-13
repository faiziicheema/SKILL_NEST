const Categories = require("../Models/Categories");
const Courses = require("../Models/Courses");
const CoursesController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Courses.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getCoursesById: async (req, res) => {
    try {
      const { id } = req.params;
      const courses = await Courses.findById(id);
      if (!courses) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  addCourses: async (req, res) => {
    try {
      const {
        title,
        description,
        duration,
        courseType,
        ratings,
        categories,
        programFor,
        careerOpportunity,
        courseContent,
      } = req.body;
      if (!title || !description || !duration || !courseType || !categories) {
        return res.status(404).json({ message: "Please fill required fields" });
      }
      const image = req.file.path;
      const course = new Courses({
        title,
        description,
        duration,
        courseType,
        ratings,
        image,
        programFor,
        careerOpportunity,
        courseContent,
        categories, // Assign the array of category IDs to the 'categories' field
      });
      const savedCourse = await course.save();
      // Update categories with the course ID
      if (typeof categories === "object") {
        for (const categoryId of categories) {
          const category = await Categories.findById(categoryId);
          if (category) {
            category.courses.push(savedCourse._id);
            await category.save();
          }
        }
      } else {
        const category = await Categories.findById(categories);
        if (category) {
          category.courses.push(savedCourse._id);
          await category.save();
        }
      }

      res.json(savedCourse);
    } catch (e) {
      res.status(500).json({ error: "Unable to create the course" });
      // console.log(e);
    }
  },
};
module.exports = CoursesController;
