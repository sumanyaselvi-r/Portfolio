import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "WordPress (Divi)",
  "GitHub",
  "Canva",
  "SEO",
  "AI tools",
];

const Skills = () => {
  // Split skills into 3 rows
  const row1 = skills.slice(0, 4);
  const row2 = skills.slice(4, 8);
  const row3 = skills.slice(8, skills.length);

  const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-title">My Skills</h2>

      {[row1, row2, row3].map((row, rowIndex) => (
        <div className="skills-row" key={rowIndex}>
          {row.map((skill, index) => (
            <motion.span
              className="skill-tag"
              key={index}
              custom={index}
              variants={skillVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, color: "#A855F7" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.section>
  );
};

export default Skills;
