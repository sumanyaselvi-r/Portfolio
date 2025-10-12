import React, { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Frontend Developer (Intern)",
      company: "Sanyu Infotech, Sivakasi",
      duration: "Nov 2023 – Dec 2023",
      desc: "I worked on a mobile-friendly restaurant website using HTML, CSS, and Bootstrap. This role helped me grow in adaptability, creativity, and collaboration, turning static designs into interactive web pages."},
    {
      title: "WordPress Web Designer(Full Time)",
      company: "Xpressreach Branding Agency",
      duration: "May 2024 – May 2025",
      desc: "I built responsive WordPress websites using Divi and customized themes for clients. Along the way, I honed communication, problem-solving, and teamwork skills, making sure every project met client expectations.",
    },
    {
      title: "Freelance Web Developer",
      company: "Fertilizer Company Website",
      duration: "Jan 2024 – Feb 2024",
      desc: "I built a full-stack website with React, Node.js, and Express, including contact forms and smooth performance across devices. Freelancing taught me initiative, accountability, and how to manage projects independently.",
    },
    
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="exp-title">Career Journey</h2>
                        <p className="skills-subtitle">From internships to professional projects, here’s my journey.</p>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
