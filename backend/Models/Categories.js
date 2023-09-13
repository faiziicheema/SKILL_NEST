const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses", // Reference to the Courses model
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("Categories", categorySchema);

module.exports = Categories;
