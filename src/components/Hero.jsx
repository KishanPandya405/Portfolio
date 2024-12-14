import React from "react";
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div class="hero-section">
      <div class="container text-white text-center d-flex flex-column justify-content-center align-items-center">
        <h1 class="display-4 fw-bold lh-1">
          Building Dynamic, Scalable, and Interactive Web Applications with
          React
        </h1>
        <p class="lead">
          React is a powerful JavaScript library for building dynamic and
          interactive user interfaces. With its component-based architecture,
          React allows you to create reusable components, manage state
          efficiently, and develop fast, scalable applications. Ideal for
          building modern, high-performance web apps that deliver exceptional
          user experiences.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
          >
            <a
              href="/Kishan_Pandya_Cv.pdf"
              download="Kishan_Pandya_Cv.pdf"
              class="text-white text-decoration-none"
            >
              Resume
            </a>
          </button>
          <button type="button" class="btn btn-secondary">
            <a href="tel:+917984229096" class="text-white text-decoration-none">
              Call Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
