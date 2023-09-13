import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
const Testimonials = () => {
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
            <b>TESTIMONIAL</b>
          </motion.h1>
          {/* <motion.strong
            viewport={{ once: true }}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="abooutusContent"
          >
            <b>SKILL NEST INSTITUTE</b> has been an incredible journey of growth
            and achievement. The dedicated faculty, cutting-edge resources, and
            inclusive community have profoundly shaped my education. From novice
            to expert, this institute has been instrumental in my personal and
            professional development. The emphasis on critical thinking,
            creativity, and leadership skills has not only honed my career but
            also my character. <b>SKILL NEST INSTITUTE</b> is more than just an
            educational institution; it's a supportive family that nurtures
            dreams and aspirations. Here, you don't just earn a degree; you gain
            a future filled with opportunities. Gratitude to [Institute Name]
            for making me who I am today!
          </motion.strong> */}
        </div>
      </div>
      <div className="afterMainAbout container">
        <h2 className="h2CEOLeft text-center text-dark  ">Student Feedback</h2>
      </div>
    </div>
  );
};

export default Testimonials;
