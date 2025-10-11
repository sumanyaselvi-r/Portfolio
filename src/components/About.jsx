import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {/* Title outside the container */}
      <h2 className="about-title">About Me</h2>

      <motion.div
        className="about-container"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="about-text">
          I’m a passionate Web Developer skilled in WordPress (Divi), React.js, HTML, CSS, and JavaScript. I create interactive, responsive, and user-friendly websites that help businesses and individuals stand out online.
        </p>
        <p className="about-text">
          I enjoy turning ideas into functional websites that are visually appealing and perform flawlessly across all devices. My goal is to create digital experiences that combine creativity, technology, and usability.
        </p>
        <p className="about-text">
          I love exploring new web technologies, optimizing websites for better performance, and continuously learning to deliver modern, high-quality digital solutions.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
