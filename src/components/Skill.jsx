import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";

const Skill = () => {
  return (
    <div
      className="container-fluid px-4 py-5"
      id="featured-3"
      style={{ backgroundColor: '#0a192f', color: '#ffffff' }}
    >
      <h2 className="pb-2 border-bottom text-center text-light">My Skills</h2>
      <p className="text-center ">
        These are the technologies I have worked with.
      </p>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {/* Skill Card */}
        {[
          { Icon: FaHtml5, name: "HTML5", color: "#e44d26" },
          { Icon: FaCss3Alt, name: "CSS3", color: "#264de4" },
          { Icon: IoLogoJavascript, name: "JavaScript", color: "#f7df1e" },
          { Icon: FaReact, name: "ReactJs", color: "#61dafb" },
          { Icon: SiRedux, name: "Redux", color: "#764abc" },
          { Icon: FaGithub, name: "GitHub", color: "#ffffff" }
        ].map((skill, index) => (
          <div key={index} className="feature col">
            <div
              className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3"
              style={{
                background: skill.color,
                color: '#0a192f',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <skill.Icon />
            </div>
            <h3 className="fs-3 text-light">{skill.name}</h3>
            <p className="text">
              A brief description of the skill and how I’ve utilized it in my projects.
            </p>
            <a
              href="#"
              className="icon-link text-decoration-none"
              style={{
                color: '#61dafb',
                fontWeight: 'bold',
                transition: 'color 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.target.style.color = '#ffffff')}
              onMouseOut={(e) => (e.target.style.color = '#61dafb')}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
