import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    title: "Frontend Developer (Intern)",
    company: "Sanyu Infotech, Sivakasi",
    duration: "Nov 2023 – Dec 2023",
    desc: "I worked on a mobile-friendly restaurant website using HTML, CSS, and Bootstrap. This role helped me grow in adaptability, creativity, and collaboration, turning static designs into interactive web pages.",
  },
  {
    title: "WordPress Web Designer (Full Time)",
    company: "Xpressreach Branding Agency",
    duration: "May 2024 – May 2025",
    desc: "I built responsive WordPress websites using Divi and customized themes for clients. Along the way, I honed communication, problem-solving, and teamwork skills, making sure every project met client expectations.",
  },
  {
    title: "Business info website",
    company: "Payantech It Solution",
    desc: "I built a Business info website with React including contact forms and smooth performance across devices. Freelancing taught me initiative, accountability, and how to manage projects independently.",
  }
];

// Card animation variants
const cardVariants = {
  offscreenLeft: { x: -100, opacity: 0 },
  offscreenRight: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.6 }
  }
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="exp-title">Career Journey</h2>
      <p className="skills-subtitle">
        From internships to professional projects, here’s my journey.
      </p>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={index % 2 === 0 ? "offscreenLeft" : "offscreenRight"}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
