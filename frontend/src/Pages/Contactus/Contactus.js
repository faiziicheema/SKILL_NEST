import React from "react";
import "./Contactus.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../Assets/logo.png";
const Contactus = () => {
  return (
    <div>
      <div className="contentAfterHeader col-md-6">
        <div>
          <motion.h1
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h1Content"
          >
            <b>Contact US</b>
          </motion.h1>
          <motion.strong
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="abooutusContent"
          >
            Have questions, ideas, or just want to say hello? We're all ears!
            Contacting us is as easy as pie. Whether it's about admissions,
            careers, or a simple chat, drop us a line, and we'll be delighted to
            connect with you. Let's make sparks fly – reach out today!
          </motion.strong>
        </div>
      </div>
      <div class="afterMainContact ">
        <div className="popularHeadingDiv">
          <h6 className="popularH5">SEND US A MESSAGE</h6>
          <h1>
            KEEP <b className="text-black">IN TOUCH. </b>
          </h1>
        </div>
        <div className="socialMediaLinks d-flex">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to="https://www.facebook.com/skillnestinstitute/"
              class="fa ic fa-facebook "
            ></Link>
          </motion.div>
          {/* <Link to="#" class="fa ic fa-twitter "></Link> */}
          {/* <Link to="#" class="fa ic fa-google "></Link> */}
          {/* <Link to="#" class="fa ic fa-linkedin "></Link> */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link to="https://youtube.com/" class="fa ic fa-youtube "></Link>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            {" "}
            <Link
              to="https://instagram.com/skillnestinstitute?igshid=MzRlODBiNWFlZA=="
              class="fa ic fa-instagram "
            ></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
