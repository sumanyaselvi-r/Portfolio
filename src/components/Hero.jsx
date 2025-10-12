import React from "react";
import { motion } from "framer-motion";
import Resume from '../assets/Resume.pdf';
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span>Hi, I'm Sumanya</span>
          <br />
          <span className="hero-role">Web Developer</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I build websites that bring your ideas to life. From sleek designs to smooth interactions, I make digital experiences that are easy to use and look amazing.

Let’s turn your vision into a website people love.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href="#projects" className="hero-btn primary">
            View My Work
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="hero-btn secondary"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
