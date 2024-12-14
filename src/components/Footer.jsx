import React from "react";
import {
  FaInstagramSquare,
  FaFacebook,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="py-5">
        <div className="row">
          {/* Quick Links */}
          <div className="col-6 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link footer-link">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link footer-link">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link footer-link">
                  Projects
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link footer-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="col-6 col-md-3 mb-3">
            <h5>Gallery</h5>
            <div className="footer-images">
              <img
                src="01.jpg"
                alt="Image 1"
                className="footer-image"
              />
              <img
                src="02.jpg"
                alt="Image 2"
                className="footer-image"
              />
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-4 offset-md-1 mb-3">
            <h5>Subscribe to our Newsletter</h5>
            <p>Get the latest updates delivered to your inbox.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary subscribe-btn" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="get-in-touch mt-4">
          <h5>Get in Touch</h5>
          <div className="contact-info">
            <p>
              <span>Email:</span> kishan@example.com
            </p>
            <p>
              <span>Phone:</span> +91-12345-67890
            </p>
            <p>
              <span>Address:</span> Your City, Country
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Kishan Pandya, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="social-icon" href="https://www.linkedin.com/in/kishan-pandya-91950120a/">
                <FaLinkedin size={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="social-icon" href="https://github.com/KishanPandya405">
                <FaGithubSquare size={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="social-icon" href="#y
              ">
                <FaInstagramSquare size={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="social-icon" href="#">
                <FaFacebook size={28} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
