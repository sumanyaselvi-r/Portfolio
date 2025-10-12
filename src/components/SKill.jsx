.skills {
  position: relative;
  padding: 6rem 2rem;
  color: #fff;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  overflow: hidden;
}

/* Title */
.skills-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #a855f7, #818cf8, #a855f7);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientSlide 4s linear infinite;
}

.skills-subtitle {
  color: #fff;
  margin-bottom: 3rem;
  font-size: 1.3rem;
}

/* Grid Layout */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 1.3rem;
}

/* Glass Cards */
.skill-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.15);
  transition: all 0.4s ease;
  font-size: 1.3rem;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 35px rgba(168, 85, 247, 0.4);
}

/* Category Title */
.skill-category {
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  color: #a855f7;
  font-weight: 600;
}

/* Skill Tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: #fff;
  transition: all 0.3s ease;
  animation: float 6s ease-in-out infinite alternate;
}

.skill-tag:hover {
  color: #a855f7;
  background: rgba(168, 85, 247, 0.15);
  box-shadow: 0 0 15px #a855f7, 0 0 25px #818cf8;
  transform: scale(1.1);
}

/* Floating effect */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

/* Animated Gradient */
@keyframes gradientSlide {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 0%; }
  100% { background-position: 0% 0%; }
}

/* Star overlay */
.stars-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.15;
  animation: shimmer 20s linear infinite;
  z-index: -1;
}

@keyframes shimmer {
  from { background-position: 0 0; }
  to { background-position: 1000px 1000px; }
}

/* Responsive */
@media (max-width: 768px) {
  .skills {
    padding: 4rem 1.5rem;
  }

  .skill-card {
    padding: 1.5rem;
  }

  .skill-category {
    font-size: 1.3rem;
  }

  .skill-tag {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .skills-title {
    font-size: 2rem;
  }
  .skills-subtitle {
    font-size: 0.95rem;
  }
}
