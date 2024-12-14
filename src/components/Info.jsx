import React from "react";

const Info = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#ffffff",
      }}
    >
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
        {/* Profile Image */}
        <div className="col-lg-6 text-center">
          <img
            src="kp.png"
            alt="Kishan Pandya"
            className="rounded-circle shadow img-fluid"
            width="300"
            height="300"
          />
        </div>

        {/* About Me Text */}
        <div
          className="col-lg-6 text-center text-lg-start"
          style={{ animation: "fadeIn 1.5s ease-in-out" }}
        >
          <h1 className="display-4 fw-bold">About Me</h1>
          <p className="lead">
            Hi, I'm <strong>Kishan Pandya</strong>, a dedicated React developer
            passionate about building interactive and responsive web
            applications. With a strong foundation in marketing and IT, I bring
            a unique perspective to every project.
          </p>
          <p className="lead">
            My technical expertise includes React, Redux, JavaScript, and CSS,
            and I thrive on crafting modern and user-friendly interfaces. Beyond
            coding, I enjoy exploring new technologies and challenging myself
            with exciting projects.
          </p>
          <button
            type="button"
            className="btn btn-outline-light btn-lg"
            style={{ marginTop: "15px" }}
          >
            <a
              href="/Kishan_Pandya_Cv.pdf"
              download="Kishan_Pandya_Cv.pdf"
              class="text-grey text-decoration-none"
            >
             View Resume
            </a>
          </button>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="row my-5">
        <h2 className="text-center mb-4">Technical Skills</h2>
        <div className="col-12">
          {/* Progress Bars */}
          {[
            { skill: "React & Redux", width: "90%", color: "bg-success" },
            { skill: "JavaScript", width: "85%", color: "bg-info" },
            { skill: "CSS & Bootstrap", width: "80%", color: "bg-warning" },
            { skill: "HTML5 & Bootstrap", width: "90%", color: "bg-danger" },
          ].map((progress, index) => (
            <div className="progress mb-3" key={index}>
              <div
                className={`progress-bar ${progress.color}`}
                role="progressbar"
                style={{ width: progress.width }}
                aria-valuenow={progress.width}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress.skill} - {progress.width}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .progress-bar {
            transition: width 1.2s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Info;
