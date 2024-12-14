import React from 'react'

const WorkInfo = () => {
  return (
     <div className="container marketing" style={{ backgroundColor: "#f8f9fa", padding: "2rem" }}>
  {/* Featurettes Section */}
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">
        E-Commerce Platform{" "}
        <span className="text-body-secondary" style={{ color: "#6c757d" }}>
          Advanced Functionality
        </span>
      </h2>
      <p className="lead">
        This project showcases a fully functional e-commerce platform with advanced features like a wishlist, cart management, and product filtering.
      </p>
    </div>
    <div className="col-md-5">
      <img
        src="block9.avif"
        alt="E-Commerce Project"
        className="featurette-image img-fluid mx-auto animate-fade-in"
        width="500"
        height="500"
      />
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">
        Chat Application{" "}
        <span className="text-body-secondary" style={{ color: "#6c757d" }}>
          Real-Time Messaging
        </span>
      </h2>
      <p className="lead">
        A user-friendly chat app featuring real-time messaging, user profiles, and a sleek modern design.
      </p>
    </div>
    <div className="col-md-5">
      <img
        src="block12.png"
        alt="Chat Application"
        className="featurette-image img-fluid mx-auto animate-fade-in"
        width="500"
        height="500"
      />
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">
        Admin Dashboard{" "}
        <span className="text-body-secondary" style={{ color: "#6c757d" }}>
          Data Management Simplified
        </span>
      </h2>
      <p className="lead">
        A comprehensive dashboard for managing products, categories, and customer data with advanced dynamic forms.
      </p>
    </div>
    <div className="col-md-5">
      <img
        src="block11.avif"
        alt="Admin Dashboard"
        className="featurette-image img-fluid mx-auto animate-fade-in"
        width="500"
        height="500"
      />
    </div>
  </div>
  <hr className="featurette-divider" />

  {/* Project Highlights Section */}
  <div className="row">
    <div className="col-lg-4">
      <img
        src="block9.avif"
        alt="Project 1"
        className="bd-placeholder-img rounded-circle animate-zoom-in"
        width="140"
        height="140"
      />
      <h2 className="fw-normal">Crypto Dashboard</h2>
      <p>
        An advanced dashboard featuring live crypto stats, trends, and detailed analytics.
      </p>
      <p>
        <a
          className="btn btn-secondary"
          href="#"
          style={{ cursor: "pointer", transition: "all 0.3s" }}
        >
          View Details »
        </a>
      </p>
    </div>
    <div className="col-lg-4">
      <img
        src="block15.jpg"
        alt="Project 2"
        className="bd-placeholder-img rounded-circle animate-zoom-in"
        width="140"
        height="140"
      />
      <h2 className="fw-normal">AI Chatbot</h2>
      <p>
        A JavaScript-based AI chatbot with advanced conversational capabilities and React integration.
      </p>
      <p>
        <a
          className="btn btn-secondary"
          href="#"
          style={{ cursor: "pointer", transition: "all 0.3s" }}
        >
          View Details »
        </a>
      </p>
    </div>
    <div className="col-lg-4">
      <img
        src="block14.jpg"
        alt="Project 3"
        className="bd-placeholder-img rounded-circle animate-zoom-in"
        width="140"
        height="140"
      />
      <h2 className="fw-normal">To-Do App</h2>
      <p>
        A simple yet effective app for task management, using React hooks and state management.
      </p>
      <p>
        <a
          className="btn btn-secondary"
          href="#"
          style={{ cursor: "pointer", transition: "all 0.3s" }}
        >
          View Details »
        </a>
      </p>
    </div>
  </div>
</div>
  )
}

export default WorkInfo;