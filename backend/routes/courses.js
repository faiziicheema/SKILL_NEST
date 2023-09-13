// routes/courseRoutes.js

const express = require("express");
const router = express.Router();
const CoursesController = require("../Controllers/courses");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Define the file name
  },
});

const upload = multer({ storage: storage });

// Create a new course
router.get("/", CoursesController.getAllCourses);
router.get("/:id", CoursesController.getCoursesById);
router.post("/", upload.single("image"), CoursesController.addCourses);

module.exports = router;
