import React, { useEffect, useState } from "react";
import "./Course.css";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../BASE_SKILL_NEST";
import { useParams } from "react-router-dom";
import Pic from "../../Assets/c-1.jpg";
import Logo from "../../Assets/logo.png";
import { motion } from "framer-motion";
const Course = () => {
  const [courseData, setCourseData] = useState({});
  const { id } = useParams();
  const getCoursesDataById = async () => {
    await axios
      .get(BASE_URL + "/courses/" + id)
      .then((val) => setCourseData(val.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getCoursesDataById();
  }, [id]);
  return (
    <div className="courseMain">
      <div className="courseContent">
        <div className="contentAfterHeader col-md-6">
          {/* <h2 className="h2CEOLeft text-white ">{courseData.courseType}</h2> */}
          <motion.h2
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="h2CEOLeft text-white "
          >
            {courseData.title + " PROGRAM"}
          </motion.h2>
          {/* <motion.strong
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-white"
          >
            {courseData.description}
          </motion.strong> */}
        </div>
      </div>

      <div className="afterContentMain">
        <div className="imgDivSingleCourse row ">
          {courseData.image !== undefined && (
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="imgSingleCourse col-md-6  "
              src={BASE_URL + "/" + courseData.image}
              alt=""
            />
          )}
          <div className="d-flex flex-column justify-content-center mt-5  col-md-6">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="h2CEOLeft h2MDLeft  text-info fw-bold "
            >
              {courseData.title}
            </motion.h2>

            {courseData.duration !== undefined && (
              <motion.strong
                viewport={{ once: true }}
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.2 }}
                className="text-secondary"
              >
                Duration: {courseData.duration} weeks
              </motion.strong>
            )}

            <motion.strong
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="text-secondary text-just"
            >
              {courseData.description}
            </motion.strong>
          </div>
        </div>
      </div>
      <div class="remainingDataCourseOne ">
        <div className="container col-md-8 mt-5">
          <motion.h2
            viewport={{ once: true }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Course Content
          </motion.h2>

          <small>
            <ul className="row">
              {courseData.courseContent !== undefined &&
                courseData.courseContent.map((val) => (
                  <motion.li
                    viewport={{ once: true }}
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-secondary col-md-6 fw-medium "
                  >
                    {val}
                  </motion.li>
                ))}
            </ul>
          </small>
        </div>
        <div className="container col-md-8 mt-5">
          <motion.h2
            viewport={{ once: true }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Opportunity
          </motion.h2>
          <motion.p
            initial={{ x: -100 }}
            viewport={{ once: true }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-just"
          >
            {courseData.careerOpportunity}
          </motion.p>
        </div>
        <div className="container col-md-8 mt-5">
          <motion.h2
            initial={{ x: -100 }}
            viewport={{ once: true }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Who is this program for?
          </motion.h2>
          <motion.p
            viewport={{ once: true }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-just"
          >
            {courseData.programFor}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Course;
