const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
    },
    courseType: {
      type: String,
      required: true,
    },
    programFor: {
      type: String,
    },
    careerOpportunity: {
      type: String,
    },
    courseContent: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("Courses", courseSchema);
module.exports = Courses;
