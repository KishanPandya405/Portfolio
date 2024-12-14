import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import Info from '../components/info';
import GetinTouch from '../components/GetinTouch';


const About = () => {
  return (
    <div>
        <nav>
            <Header/>
        </nav>
        <Hero/>
        <div className="container my-5">
      {/* Hero Section */}
    <Info />
      {/* Contact Section */}
      {/* Contact Section */}
      <GetinTouch/>
    </div>
        <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Custom cards</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('hero2.jpg')" }} >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                <small></small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <small></small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('block14.jpg')"}}>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('block15.jpg')"}}>
        </div>
      </div>
    </div>
  </div>
  <Skill/>
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
        Hi, I'm Kishan Pandya, a passionate web developer specializing in React
        JS, JavaScript, and CSS. I enjoy creating interactive and responsive web
        applications that provide seamless user experiences.
        </p>
        <div class="d-inline-flex gap-2 mb-5">
          <button
            class="d-inline-flex align-items-center btn btn-primary btn-lg px-3 rounded-pill"
            type="button"
          >
            WhatsApp
            <svg class="bi ms-2" width="1" height="24">
              <use xlink:href="#arrow-right-short"></use>
            </svg>
          </button>
          </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>React</h2>
          <p>React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage dynamic data efficiently. React's component-based architecture and virtual DOM ensure fast rendering, making it ideal for interactive and responsive applications. Swap the background-color utility and add a .text-* color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more to enhance customization.</p>
          <button class="btn btn-outline-light" type="button"><a href='https://www.linkedin.com/in/kishan-pandya-91950120a/'class="text-grey text-decoration-none">LinkedIn</a></button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>JavaScript</h2>
          <p>JavaScript is a versatile programming language primarily used to create interactive and dynamic web applications. It allows developers to manipulate web page content, control multimedia, and enable rich user experiences. Known for its flexibility, JavaScript can be used on both client and server sides. Swap the background-color utility and add a .text-* color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more to enhance customization.</p>
          <button class="btn btn-outline-secondary" type="button"><a href='https://github.com/KishanPandya405'class="text-grey text-decoration-none">GitHub</a></button>
        </div>
      </div>
    </div><br />
        <footer>
            <Footer/>
        </footer>
            </div>
            
  )
}

export default About;