import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";

const skillsData = {
  Frontend: ["JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "WordPress (Divi)"],
  Backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication (JWT)"],
  "Design & Tools": ["Canva", "Figma", "VS Code", "Git & GitHub", "AI Tools"],
  "Soft Skills": ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management", "Continuous Learning"],
};

// Card animation variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 }
  }
};

// Skill tag animation variants
const tagVariants = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Capabilities</h2>
      <p className="skills-subtitle">
        Core skills and strengths that shape my work as a developer
      </p>

      <motion.div
        className="skills-grid"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            className="skill-card"
            key={category}
            variants={cardVariants}
          >
            <h3 className="skill-category">{category}</h3>
            <motion.div className="skill-tags" variants={{ onscreen: { transition: { staggerChildren: 0.1 }}}}>
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="skill-tag"
                  variants={tagVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="stars-overlay"></div>
    </section>
  );
};

export default Skills;
