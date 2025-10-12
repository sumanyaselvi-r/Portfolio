import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <a href="https://www.linkedin.com/in/sumanya-selvi-r-2b8513274/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/sumanyaselvi-r" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
