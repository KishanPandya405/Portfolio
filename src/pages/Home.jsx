import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import Info from "../components/info";
import GetinTouch from "../components/GetinTouch";
import WorkInfo from "../components/WorkInfo";

const Home = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Hero />
      <Skill />
      <Info />
      <WorkInfo />
      <GetinTouch />
      <div class="p-5 text-center bg-body-tertiary rounded-3 ">
        <img
          src="kp.png"
          alt="Your Profile"
          className="rounded-circle mb-4"
          width="200"
          height="250"
        />
        <h1 class="text-body-emphasis">Kishan Pandya</h1>
        <p class="col-lg-8 mx-auto fs-5 text-muted">
          Hi, I'm Kishan Pandya, a passionate web developer specializing in
          React JS, JavaScript, and CSS. I enjoy creating interactive and
          responsive web applications that provide seamless user experiences.
        </p>
        <div class="d-inline-flex gap-2 mb-5">
          <button
            class="d-inline-flex align-items-center btn btn-primary btn-lg px-3 rounded-pill"
            type="button"
          >
             <a
      href="https://wa.me/7984229096?text=Hello%20Kishan%20Pandya,%20I%20want%20to%20connect%20with%20you!"
      target="_blank"
      class="text-white text-decoration-none"
    >
            WhatsApp
            </a>
            <svg class="bi ms-2" width="2" height="24">
              <use xlink:href="#arrow-right-short"></use>
            </svg>
          </button>
          <button
            class="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            <a
              href="/Kishan_Pandya_Cv.pdf"
              download="Kishan_Pandya_Cv.pdf"
              class="text-dark text-decoration-none"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
