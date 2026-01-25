import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Food Restaurant Website",
    description:
      "Responsive restaurant website showcasing menu, offers, and contact info.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://darling-seahorse-8c9782.netlify.app/",
  },
  {
    title: "Fertilizer Company Website",
    description:
      "Full-stack web app for a fertilizer company using React and Node.js.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://luxury-eclair-df0927.netlify.app/",
  },
   {
    title: "Business info website",
    description:
      "built a Business info website using React including contact forms and smooth performance across devices.",
    tech: ["React"],
    live: "https://payantech.in/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Section Title */}
      <motion.h2
        className="projects-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
Projects Built by Me      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="projects-subtitle"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A glimpse of what I’ve built — combining design, creativity, and code.
      </motion.p>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120, // alternate sides
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(168,85,247,0.3)",
            }}
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="card-buttons">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
