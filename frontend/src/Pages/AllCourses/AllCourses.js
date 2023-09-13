import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import { useNavigate } from "react-router-dom";
import Pic1 from "../../Assets/c-1.jpg";
import Pic2 from "../../Assets/c-2.jpg";
import Pic3 from "../../Assets/c-3.jpg";
import Logo from "../../Assets/logo.png";
import Pic4 from "../../Assets/c-4.jpg";
import { BASE_URL } from "../../BASE_SKILL_NEST";
import axios from "axios";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { Button, Modal } from "react-bootstrap";
const AllCourses = ({ userId }) => {
  const [delCourse, setDelCourse] = useState("");
  const [courseContent, setCourseContent] = useState([]);
  const [courseContentValue, setCourseContentValue] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [reloadCoursesBool, setReloadCoursesBool] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    duration: "",
    courseType: "",
    title: "",
    description: "",
    careerOpportunity: "",
    programFor: "",
  });
  const [image, setImage] = useState("");
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [coursesAllData, setCoursesAllData] = useState([]);
  const navigate = useNavigate();
  const getCoursesData = async () => {
    await axios
      .get(BASE_URL + "/courses/")
      .then((val) => {
        setCoursesAllData(val.data);
      })
      .catch((e) => console.log(e));
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleCategoryChange = (event, newValue) => {
    // const selectedNames = newValue.map((option) => option.name);
    setSelectedCategories(newValue);
  };
  const handleCloseModal = () => {
    setShowAddCourseModal(false);
    setSelectedCategories([]);
    setInputData({
      title: "",
      duration: "",
      courseType: "",
      title: "",
      description: "",
      careerOpportunity: "",
      programFor: "",
    });
    setCourseContent([]);
  };
  const handlePost = async () => {
    const {
      title,
      duration,
      courseType,
      description,
      careerOpportunity,
      programFor,
    } = inputData;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("duration", duration);
    formData.append("courseType", courseType); // Make sure courseType is defined in inputData
    formData.append("description", description);
    formData.append("careerOpportunity", careerOpportunity);
    formData.append("programFor", programFor);
    formData.append("image", image);
    selectedCategories.forEach((category) => {
      formData.append("categories", category._id); // Assuming each category object has an "_id" property
    });
    courseContent.forEach((courseOne) => {
      formData.append("courseContent", courseOne); // Assuming each category object has an "_id" property
    });
    await axios
      .post(BASE_URL + "/courses/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((val) => {
        if (val.status === 200) {
          setReloadCoursesBool(!reloadCoursesBool);
          handleCloseModal();
        }
      })
      .catch((e) => {
        window.alert(e.response["data"]["message"]);
      });
  };
  const getAllCategories = async () => {
    await axios
      .get(BASE_URL + "/" + "categories")
      .then((val) => setCategoriesData(val.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  useEffect(() => {
    getCoursesData();
  }, [reloadCoursesBool]);
  return (
    <div>
      <div className="contentAfterHeader col-md-6">
        <motion.strong
          viewport={{ once: true }}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="strongContent"
        >
          ALL COURSES OFFERED BY
        </motion.strong>
        <div>
          <motion.h1
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="h1Content"
          >
            <b>SKILL NEST</b> INSTITUTE <br /> FOR <b> EDUCATION</b>
          </motion.h1>
        </div>
      </div>
      <div className="popularcourses container ">
        <div className="popularHeadingDiv d-flex justify-content-between ">
          <div>
            <h6 className="popularH5">LEARN NEW SKILLS</h6>
            <h1>Skill Nest Courses.</h1>
          </div>
          {userId !== null && (
            <button
              class="btSortAbout"
              onClick={() => setShowAddCourseModal(true)}
            >
              Add New
            </button>
          )}
        </div>

        <div className="mt-4 row d-flex  justify-content-center ">
          {typeof coursesAllData === "object" && coursesAllData.length > 0
            ? coursesAllData.map((val, i) => (
                <motion.div
                  viewport={{ once: true }}
                  imgCourseMain
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: i / (i + 2), duration: 0.5 },
                  }}
                  onClick={() => navigate("/course/" + val._id)}
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="popularcoursedCard cp mb-5 col-md-4"
                >
                  <div className="imgPopular">
                    <img src={BASE_URL + "/" + val.image} alt="" />
                  </div>
                  <div className="contentPopularDiv">
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <strong className="strongtypeopularCourse">
                        {val.courseType}
                      </strong>
                      |
                      <small className="smallPopularCource">
                        {val.duration + " "} Weeks
                      </small>
                      |
                      <div>
                        <span className="starsRatings fa fa-star checked"></span>
                        <span className="starsRatings fa fa-star checked"></span>
                        <span className="starsRatings fa fa-star checked"></span>
                        <span className="starsRatings fa fa-star"></span>
                        <span className="starsRatings fa fa-star"></span>
                      </div>
                    </div>
                    <h3 className="namepopularCourse">{val.title}</h3>
                  </div>
                </motion.div>
              ))
            : "No courses added yet!"}
        </div>
      </div>
      <Modal size="lg" show={showAddCourseModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-light" closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 my-2">
              <strong>Title</strong>
              <input
                type="text"
                placeholder="Type here"
                name="title"
                className="form-control"
                value={inputData.title}
                onChange={handleInput}
              />
            </div>
            <div className="col-md-6 my-2">
              <strong>Type</strong>
              <input
                type="text"
                name="courseType"
                placeholder="Type here"
                className="form-control"
                value={inputData.courseType}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-2">
              <strong>Duration</strong>
              <input
                type="number"
                placeholder="Type here"
                className="form-control"
                name="duration"
                value={inputData.duration}
                onChange={handleInput}
              />
            </div>
            <div className="col-md-6 my-2">
              <strong>Attachment</strong>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="my-2">
            <strong>Categories</strong>
            <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={categoriesData}
              getOptionLabel={(option) => option.name}
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Categories"
                  placeholder="Select categories"
                />
              )}
            />
          </div>
          <div className="row">
            <div className="col-md-6 my-2">
              <strong>Course Content</strong>
              <input
                placeholder="Type here"
                className="form-control"
                name="courseContentValue"
                value={courseContentValue}
                onChange={(e) => {
                  setCourseContentValue(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-end justify-content-center   my-2">
              <button
                className="form-control"
                onClick={(e) => {
                  if (!courseContent.includes(courseContentValue)) {
                    courseContent.push(courseContentValue);
                    setCourseContentValue("");
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 my-2">
              <select
                name="delCourse"
                id="delCourse"
                value={delCourse}
                onChange={(e) => {
                  setDelCourse(e.target.value);
                  const filterArr = courseContent.filter(
                    (val) => val !== e.target.value
                  );
                  setCourseContent(filterArr);
                }}
                className="form-select "
              >
                {courseContent.map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-2">
            <strong>Description</strong>
            <textarea
              placeholder="Type here"
              className="form-control"
              name="description"
              value={inputData.description}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="my-2">
            <strong>Career Opportunity</strong>
            <textarea
              placeholder="Type here"
              className="form-control"
              name="careerOpportunity"
              value={inputData.careerOpportunity}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="my-2">
            <strong>Programs For</strong>
            <textarea
              placeholder="Type here"
              className="form-control"
              name="programFor"
              value={inputData.programFor}
              onChange={handleInput}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handlePost}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllCourses;
