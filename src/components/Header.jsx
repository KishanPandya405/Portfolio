import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaInstagramSquare,
  FaFacebook,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="nav-container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills ">
          <li className="nav-item ">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              style={{ cursor: "pointer" }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              style={{ cursor: "pointer" }}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              style={{ cursor: "pointer" }}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              style={{ cursor: "pointer" }}
            >
              Testimonial
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              style={{ cursor: "pointer" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
