import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Pic1 from "../../Assets/c-1.jpg";
import Pic2 from "../../Assets/c-2.jpg";
import Pic3 from "../../Assets/c-3.jpg";
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_SKILL_NEST";
import axios from "axios";
import { motion } from "framer-motion";
const DashboardData = () => {
  const [coursesAllData, setCoursesAllData] = useState([]);
  const navigate = useNavigate();
  const getCoursesData = async () => {
    await axios
      .get(BASE_URL + "/courses/", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((val) => {
        setCoursesAllData(val.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCoursesData();
  }, []);
  return (
    <div>
      <div className="contentAfterHeader  col-md-6">
        {/* <div className="">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
              type: "tween",
            }}
            className="imgLogoMain"
            src={Logo}
            alt=""
          />
        </div> */}
        <motion.strong
          viewport={{ once: true }}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="strongContent"
        >
          EDUCATION AND TRAINING INSTITUTE
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
        <motion.button
          viewport={{ once: true }}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="btnContent"
          onClick={() => navigate("/allcourses")}
        >
          OUR COURSES
        </motion.button>
      </div>
      <div className="popularcourses container ">
        <div className="popularHeadingDiv">
          <h6 className="popularH5">LEARN NEW SKILLS</h6>
          <h1>Popular Courses.</h1>
        </div>
        <div className="mt-4 row d-flex  justify-content-center ">
          {typeof coursesAllData === "object" && coursesAllData.length > 0
            ? coursesAllData.map((val, i) => (
                <motion.div
                  viewport={{ once: true }}
                  onClick={() => navigate("/course/" + val._id)}
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                  }}
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
      <div className="sortAboutUs container">
        <div className="row">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="imgsortAboutUs col-lg-6"
          ></motion.div>
          <div className="contentsortAboutUs col-lg-6">
            <motion.h6
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="sortType"
            >
              SORT ABOUT US
            </motion.h6>
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.1 }}
              className="h2sortAbout text-black"
            >
              We are Nest Institute work since 1980.
            </motion.h2>
            <motion.strong
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2 }}
              className="strongsortAbout"
            >
              We take our mission of increasing global access to quality
              education seriously. We connect learners to the best universities
              and institutions from around the world.
            </motion.strong>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="psortAbout"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut
              wisi enim ad minim veniam.
            </motion.p>
            <motion.ul
              viewport={{ once: true }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.4 }}
              className="mt-3"
            >
              <li>Professional And Experienced Since 1980</li>
              <li>
                We Connect Learners To The Best Universities From Around The
                World
              </li>
              <li>Our Mission Increasing Global Access To Quality Aducation</li>
              <li>100K Online Available Courses</li>
            </motion.ul>
            <div>
              <motion.button
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                onClick={() => navigate("/about")}
                type="button"
                className="btSortAbout mx-2 mt-4"
              >
                ABOUT US
              </motion.button>
              <motion.button
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                onClick={() => navigate("/contact")}
                type="button"
                className="btSortAbout mx-2 mt-4"
              >
                CONTACT US
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="CEOMainDiv d-flex justify-content-center">
        <div className="CEOMain  row container ">
          <div className="col-md-8 contentCEO ">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h2CEOLeft"
            >
              CEO Message
            </motion.h2>
            <motion.small
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="text-secondary  text-justify mx-3 mt-3"
            >
              Dear Students and Future Innovators,
              <br />
              <br />
              Welcome to Skill Nest Institute ! I am thrilled to have you embark
              on this exciting journey of learning and discovery with us. In
              today's rapidly evolving digital landscape, proficiency in
              software and technology is essential. Our institute is committed
              to providing you with the highest quality education and resources
              to help you excel in the world of computer software.
              <br />
              <br />
              At our institute, we foster an environment of innovation,
              creativity, and continuous learning. Our dedicated faculty and
              staff are here to support you every step of the way. Whether
              you're a beginner or an experienced programmer, we have courses
              tailored to your needs. Together, we will explore the fascinating
              realm of software development and technology.
              <br />
              <br />I encourage you to make the most of your time here, ask
              questions, collaborate with fellow students, and push your
              boundaries. Your success is our success, and I can't wait to see
              the incredible projects and achievements that will emerge from
              this community.
              <br />
              <br />
              Thank you for choosing our institute, and I look forward to
              witnessing your growth and accomplishments in the world of
              computer software.
              <br />
              <br />
              Warm regards,
              <br />
              <br />
              <motion.span
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="fw-bold"
              >
                Rashid Ikram <br />
                CEO, Skill Nest Institute{" "}
              </motion.span>
            </motion.small>
          </div>
          <div className="col-md-4 d-flex flex-column  justify-content-center align-items-center ">
            <div className="popularcoursedCard d-flex flex-column align-items-center   col-md-4">
              <motion.div
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="avatar"
              ></motion.div>
              <div className="contentPopularDiv d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <motion.strong
                    viewport={{ once: true }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="strongtypeopularCourse"
                  >
                    CEO
                  </motion.strong>
                </div>
                <motion.h3
                  viewport={{ once: true }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="namepopularCourse"
                >
                  Rashid Ikram
                </motion.h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="MDMainDiv   d-flex justify-content-center">
        <div className="CEOMain  row container ">
          <div className="col-md-4 d-flex flex-column  justify-content-center align-items-center ">
            <div className="popularcoursedCard d-flex flex-column align-items-center   col-md-4">
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className=" avatarMD"
              ></motion.div>
              <div className="contentPopularDiv d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between align-items-center my-3 ">
                  <motion.strong
                    viewport={{ once: true }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="strongtypeopularCourse"
                  >
                    Marketing Director
                  </motion.strong>
                </div>
                <motion.h3
                  viewport={{ once: true }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="namepopularCourse"
                >
                  Amaima Khan
                </motion.h3>
              </div>
            </div>
          </div>
          <div className="col-md-8 contentCEO contentMD ">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h2CEOLeft h2MDLeft  text-start "
            >
              Marketing Director Message
            </motion.h2>
            <motion.small
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="text-secondary  text-justify mx-3 mt-3"
            >
              Hello Future Software Enthusiasts,
              <br />
              <br />
              I'm delighted to welcome you to Skill Nest Institute! As the
              Marketing Director, my role is to ensure that you not only receive
              top-notch education but also have a fantastic journey throughout
              your time with us.
              <br />
              <br />
              Our institute is more than just a place to learn; it's a vibrant
              community of like-minded individuals passionate about technology.
              We understand that choosing the right institute is crucial, and we
              are committed to providing you with an exceptional experience.
              <br />
              <br />
              Throughout your journey, you'll have access to a wealth of
              resources, including workshops, industry insights, and career
              support to help you succeed in the competitive software landscape.
              We are dedicated to helping you reach your goals and beyond.
              <br />
              <br />
              Feel free to connect with our team if you have any questions or
              need assistance. We're here to make your learning experience as
              smooth and enjoyable as possible.
              <br />
              <br />
              Thank you for choosing our institute, and I can't wait to see you
              thrive in the world of computer software!
              <br />
              <br />
              Best regards,
              <br />
              <br />
              <motion.span
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="fw-bold  "
              >
                Amaima Khan , <br /> Marketing Director, Skill Nest Institute{" "}
              </motion.span>
            </motion.small>
          </div>
        </div>
      </div>
      <hr />
      <div className="popularcourses teachersDivMain p-0  container ">
        <div className="popularHeadingDiv">
          {/* <h6 className="popularH5">Experinced and Qualified Teachers</h6> */}
          <h1>Experienced and Qualified Teachers</h1>
        </div>
        <div className="mt-4 row d-flex  justify-content-center ">
          <div className="popularcoursedCard d-flex flex-column align-items-center col-md-4">
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="avatarS"
            ></motion.div>
            <div className="contentPopularDiv d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between align-items-center my-3">
                <motion.strong
                  viewport={{ once: true }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="strongtypeopularCourse"
                >
                  ASP DOTNET TRAINEE
                </motion.strong>
              </div>
              <motion.h3
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="namepopularCourse"
              >
                Sameer Liaqat
              </motion.h3>
            </div>
          </div>
          <div className="popularcoursedCard d-flex flex-column align-items-center col-md-4">
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="avatarF"
            ></motion.div>
            <div className="contentPopularDiv d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between align-items-center my-3">
                <motion.strong
                  viewport={{ once: true }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="strongtypeopularCourse"
                >
                  WEBSITE TRAINEE
                </motion.strong>
              </div>
              <motion.h3
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="namepopularCourse"
              >
                Faizan Mukhtar
              </motion.h3>
            </div>
          </div>
          <div className="popularcoursedCard d-flex flex-column align-items-center  col-md-4">
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="avatarZ"
            ></motion.div>
            <div className="contentPopularDiv d-flex flex-column align-items-center ">
              <div className="d-flex justify-content-between align-items-center my-3">
                <motion.strong
                  viewport={{ once: true }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="strongtypeopularCourse"
                >
                  MOBILE APP TRAINEE
                </motion.strong>
              </div>
              <motion.h3
                viewport={{ once: true }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="namepopularCourse"
              >
                Zubair Arshad
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
