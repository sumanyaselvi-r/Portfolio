import React from "react";
import "./Skill.css";

const skillsData = {
  Frontend: ["JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "WordPress (Divi)"],
  Backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication (JWT)"],
  "Design & Tools": ["Canva", "Figma", "VS Code", "Git & GitHub", "AI Tools"],
  "Soft Skills": ["Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management", "Continuous Learning"],
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Capabilities</h2>
      <p className="skills-subtitle">Core skills and strengths that shape my work as a developer</p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-card" key={category}>
            <h3 className="skill-category">{category}</h3>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Optional subtle floating stars overlay */}
      <div className="stars-overlay"></div>
    </section>
  );
};

export default Skills;
