import React from "react";
import "./Aboutus.css";
import Logo from "../../Assets/logo.png";
import { motion } from "framer-motion";
const Aboutus = () => {
  return (
    <div>
      <div className="contentAfterHeader  col-md-6">
        <div>
          <motion.h1
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h1Content m-0"
          >
            <b>ABOUT US</b>
          </motion.h1>
          <motion.strong
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="abooutusContent"
          >
            At <b>SKILL NEST INSTITUTE</b>, we are dedicated to fostering
            excellence in education, research, and innovation. Established with
            a vision to empower individuals and advance society, we have been a
            beacon of knowledge and transformation for [number of years] years.
          </motion.strong>
        </div>
      </div>
      <div className="afterMainAbout container">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="imgAbout2Div"
        ></motion.div>
        <motion.h2
          viewport={{ once: true }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 "
        >
          We Are Skill Nest Institute, Online Course Since 1990
        </motion.h2>
        <motion.small
          viewport={{ once: true }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.1 }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </motion.small>
        <br />
        <br />
        <motion.small
          viewport={{ once: true }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </motion.small>
      </div>
    </div>
  );
};

export default Aboutus;
