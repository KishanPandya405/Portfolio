import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const GetinTouch = () => {
  return (
    <div className="row my-5 text-white" style={{ backgroundColor: '#1A237E', padding: '3rem 0' }}>
  <h2 className="text-center mb-5 display-5 fw-bold">Get in Touch</h2>

  {/* Email Card */}
  <div className="col-lg-4 col-md-6 mb-4 text-center">
    <div className="card border-0 text-white" style={{ backgroundColor: '#283593' }}>
      <div className="card-body">
        <div className="icon-container mb-3" style={{ fontSize: '3rem', color: '#FFCA28' }}>
          <i className="bi bi-envelope-fill"></i>
        </div>
        <h5 className="card-title fw-bold"><MdEmail /><br /><br />Email</h5>
        <p className="card-text">
          <a href="mailto:kishanpandya@example.com" className="text-decoration-none text-white">
            kishanpandya405@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* Phone Card */}
  <div className="col-lg-4 col-md-6 mb-4 text-center">
    <div className="card border-0 text-white" style={{ backgroundColor: '#283593' }}>
      <div className="card-body">
        <div className="icon-container mb-3" style={{ fontSize: '3rem', color: '#4CAF50' }}>
          <i className="bi bi-telephone-fill"></i>
        </div>
        <h5 className="card-title fw-bold"><FaPhoneAlt /><br /><br />Phone</h5>
        <p className="card-text">
          <a href="+917984229096" className="text-decoration-none text-white">
            +91 79842 29096
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* LinkedIn Card */}
  <div className="col-lg-4 col-md-6 mb-4 text-center">
    <div className="card border-0 text-white" style={{ backgroundColor: '#283593' }}>
      <div className="card-body">
        <div className="icon-container mb-3" style={{ fontSize: '3rem', color: '#0A66C2' }}>
          <i className="bi bi-linkedin"></i>
        </div>
        <h5 className="card-title fw-bold"><FaLinkedin /><br /><br />LinkedIn</h5>
        <p className="card-text">
          <a href="https://www.linkedin.com/in/kishan-pandya-91950120a/" className="text-decoration-none text-white">
            linkedin.com/in/kishanpandya
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default GetinTouch;