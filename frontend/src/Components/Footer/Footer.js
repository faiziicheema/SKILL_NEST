import React, { useRef, useState } from "react";
import "./Footer.css";
import Logo from "../../Assets/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Footer = () => {
  const [sendMailData, setSendMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendMailData({ ...sendMailData, [name]: value });
  };
  const handleSubmit = () => {
    const config = {
      SecureToken: "c3414580-1137-4a4c-a5f2-5636550ec996",
      To: "faizyjutt11@gmail.com",
      From: sendMailData.email,
      Subject: "This is subject",
      Body: sendMailData.message,
    };
    if (window.Email) {
      window.Email.send(config).then((val) => {
        window.alert("Email sent successfully");
        console.log(val);
      });
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flmhcmg",
        "template_xwpkuvs",
        form.current,
        "pm-xWwQEluaeyYTFG"
      )
      .then(
        (result) => {
          console.log(result);
          window.alert("Email sent successfully! ");
        },
        (error) => {
          console.log(error.text);
          window.alert("Something went wrong! ");
        }
      );
    e.target.reset();
  };

  return (
    <div className="footerMain">
      <div className="footerMainImg" />
      <div className="footerContent row">
        <div className="row">
          <div className="col-md-6 colsFooter ">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h2footer"
            >
              CONTACT US
            </motion.h2>
            <motion.h1
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="h1footer"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="pFooter"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </motion.p>
            <div className="contactsFooter mt-3 ">
              <div className="contactInfoFooter">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="iconDiv"
                >
                  <LocationOnIcon sx={{ color: "white", fontSize: "2rem" }} />
                </motion.div>
                <motion.strong
                  viewport={{ once: true }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 250 }}
                  className="text-white mx-4 "
                >
                  Office # 204, 2<sup>nd</sup> Floor, Ashrafi Heights, Main
                  Market, Gulberg, Lahore
                </motion.strong>
              </div>
              <div className="contactInfoFooter">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="iconDiv"
                >
                  <PhoneEnabledIcon sx={{ color: "white", fontSize: "2rem" }} />
                </motion.div>
                <motion.strong
                  initial={{ x: -100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 250 }}
                  className="text-white mx-4 "
                >
                  (+92) 30-786-786-28{" "}
                </motion.strong>
              </div>
              <div className="contactInfoFooter">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="iconDiv"
                >
                  <EmailIcon sx={{ color: "white", fontSize: "2rem" }} />
                </motion.div>
                <motion.strong
                  viewport={{ once: true }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 250 }}
                  className="text-white mx-4 "
                >
                  info@skillnestinstitute.com
                </motion.strong>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="col-md-6 colsFooter">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h2sendMessageFooter mb-4"
            >
              Send Us a message__
            </motion.h2>
            <div className="inputsFooter w-100">
              <div className="row  w-100   ">
                <motion.input
                  viewport={{ once: true }}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  type="text"
                  id="name"
                  className="inputFieldsFooter col-md-5 mx-2 "
                  placeholder="Your Name"
                  name="name"
                />
                <motion.input
                  viewport={{ once: true }}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  type="email"
                  id="user_email"
                  className="inputFieldsFooter col-md-5 mx-2"
                  placeholder="Your Email"
                  name="user_email"
                />
              </div>
              <motion.textarea
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                type="text"
                id="message"
                className="inputFieldsFooter col-md-10 w-100 "
                placeholder="Message"
                name="message"
              />
            </div>
            <motion.button
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              type="submit"
              className="btnContent mt-4"
            >
              Send Message
            </motion.button>
          </form>
        </div>
        <div className="d-flex justify-content-center  ">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
              type: "tween",
            }}
            className=" imgLogoFooter"
            src={Logo}
            alt=""
          />
        </div>
        {/* <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mainHeading mainHeadingFooter"
        >
          Skill Nest Institute
        </motion.h2> */}
        <motion.strong
          viewport={{ once: true }}
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="strongFooterEnd "
        >
          We take our mission of increasing global access to quality education
          seriously.
        </motion.strong>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="d-flex justify-content-center my-4"
        >
          <input
            type="text"
            className="footerSubscribeInput col-md-5"
            placeholder="Email Address."
          />
          <button type="button" className="btnSubscribeFooter">
            Subscribe
          </button>
        </motion.div>
        <hr className="border-2  text-white" />
        <motion.p
          viewport={{ once: true }}
          initial={{ x: -1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
          className="text-white text-center copyRightsFooter "
        >
          © 2023 - Designed & Developed by MMB Technologies. All rights reserved
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
