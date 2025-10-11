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
      desc: "Developed a responsive restaurant website using HTML, CSS, and Bootstrap. Focused on mobile-friendly layouts and clean UI.",
    },
    {
      title: "WordPress Web Designer(Full Time)",
      company: "Xpressreach Branding Agency",
      duration: "May 2024 – May 2025",
      desc: "Designed and developed responsive WordPress sites using Divi. Optimized performance and applied basic SEO techniques.",
    },
    
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="exp-title">My Journey</h2>
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
