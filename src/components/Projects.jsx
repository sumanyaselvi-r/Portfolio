import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Business Info Website",
    description:
      "Built a business information website using React with responsive layouts, contact forms, and smooth performance across all devices.",
    tech: ["React"],
    live: "https://payantech.in/",
  },

  {
    title: "Kaira Studio",
    description:
      "Designed and developed a cinematic photography studio website with luxury UI, immersive storytelling, smooth animations, and fully responsive modern experience.",
    tech: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    live: "https://kairastudio.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">

      {/* SECTION TITLE */}
      <motion.h2
        className="projects-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Selected Projects
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        className="projects-subtitle"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Crafting modern digital experiences with clean UI, motion, and performance.
      </motion.p>

      {/* PROJECT GRID */}
      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
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
              y: -8,
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(168,85,247,0.25)",
            }}
          >
            <div className="card-content">

              {/* TITLE */}
              <h3>{project.title}</h3>

              {/* DESCRIPTION */}
              <p>{project.description}</p>

              {/* TECH STACK */}
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* BUTTONS */}
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
                    View Code
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
