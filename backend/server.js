const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(
  "mongodb+srv://faizyjutt11:Faiziii9611@cluster0.xsnxxoo.mongodb.net/Skill_Nest_Institue?retryWrites=true&w=majority"
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const courseRouter = require("./routes/courses");
const userRouter = require("./routes/user");
const categoriesRouter = require("./routes/categoreis");

app.use("/courses", courseRouter);
app.use("/user", userRouter);
app.use("/categories", categoriesRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port 4000`);
});
