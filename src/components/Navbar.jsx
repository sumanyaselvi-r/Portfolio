import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        
      </div>

     
      <div className="nav-right">
       
        <a href="https://www.linkedin.com/in/sumanya-selvi-r-2b8513274/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sumanyaselvi-r" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
      </div>
    </nav>
  );
};

export default Navbar;
