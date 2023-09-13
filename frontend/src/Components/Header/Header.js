import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import MenuIcon from "@mui/icons-material/Menu";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { BASE_URL } from "../../BASE_SKILL_NEST";
import axios from "axios";
import { motion } from "framer-motion";
import OnlyLogo from "../../Assets/OnlyLogo.png";
const Header = ({ userId }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [coursesAllData, setCoursesAllData] = useState([]);

  const getAllCategories = async () => {
    await axios
      .get(BASE_URL + "/" + "categories")
      .then((val) => setCategoriesData(val.data))
      .catch((e) => console.log(e));
    await axios
      .get(BASE_URL + "/courses/")
      .then((val) => {
        setCoursesAllData(val.data);
      })
      .catch((e) => console.log(e));
  };
  const navigate = useNavigate();
  useEffect(() => {
    getAllCategories();
  }, []);
  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="headerMain container">
      <div className="d-flex align-items-center">
        <img className="imgHeaderLogo" src={OnlyLogo} alt="" />
        <h2 className="mainHeading" onClick={() => navigate("/")}>
          Skill Nest Institute
        </h2>
      </div>
      <div className="dropdownLinks">
        <NavLink className="navLinks" to="/">
          Home
        </NavLink>

        {/* <NavLink className="navLinks" to="/about">
          Courses
        </NavLink> */}

        <div class="dropdownm">
          <a class="dropbtnm navLinks">Courses</a>

          <div class="dropdown-contentm">
            {typeof categoriesData === "object" &&
              categoriesData.map((val, i) => (
                <a class="dropdownSD">
                  <p className="dropbtnSD">{val.name}</p>
                  <div className="dropdown-contentSD">
                    {val.courses.map((item) => {
                      const filteredData = coursesAllData.find(
                        (data) => data._id === item
                      );
                      console.log(filteredData);
                      return (
                        filteredData !== undefined && (
                          <Link to={`/course/${item}`}>
                            {filteredData !== undefined &&
                              filteredData.title
                                .toLowerCase() // Convert the entire string to lowercase
                                .replace(/^\w|\s\w/g, (match) =>
                                  match.toUpperCase()
                                )}
                          </Link>
                        )
                      );
                    })}
                  </div>
                </a>
              ))}
            {/* <a class="dropdownSD">
              <p className="dropbtnSD">Web Development</p>
              <div className="dropdown-contentSD">
                <a href="#">Frontend Development </a>
                <a href="#">Web Designing</a>
              </div>
            </a>
            <a class="dropdownSD">
              <p className="dropbtnSD">Mobile App Development</p>
              <div className="dropdown-contentSD">
                <a href="#">Flutter Development </a>
              </div>
            </a>
            <a href="#">Graphic Design</a>
            <a href="#">3D Animations</a> */}
          </div>
        </div>
        <NavLink className="navLinks" to="/about">
          About Us
        </NavLink>
        <NavLink className="navLinks" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="navLinks" to="/testimonials">
          Testimonials
        </NavLink>
        {userId !== null && (
          <IconButton
            title="Logout"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              document.location.reload();
            }}
          >
            <LogoutIcon className="text-white" />
          </IconButton>
        )}
      </div>
      <Dropdown className="dropdownHeader">
        <Dropdown.Toggle variant="trasnparent text-white" id="dropdown-basic">
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => navigate("/")}>Home</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/allcourses")}>
            Courses
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/about")}>
            About us
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/contact")}>
            Contact us
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/testimonials")}>
            Testomonials
          </Dropdown.Item>
          {userId !== null && (
            <Dropdown.Item
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                document.location.reload();
              }}
            >
              Logout
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
