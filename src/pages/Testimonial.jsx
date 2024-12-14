import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/Testimonial.css'
import Footer from '../components/Footer';
import GetinTouch from '../components/GetinTouch';

const Testimonial = () => {

    const testimonials = [
        {
          name: "John Doe",
          role: "CEO, TechCorp",
          feedback:
            "Kishan's work on our website was phenomenal! The design is sleek, the code is clean, and the responsiveness is spot on. Highly recommend!",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "Jane Smith",
          role: "Marketing Manager, Creatix",
          feedback:
            "Working with Kishan was a pleasure. His ability to turn ideas into reality is amazing. The site is perfect!",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "Robert Johnson",
          role: "Founder, InnovateNow",
          feedback:
            "Kishan's attention to detail and technical expertise brought our vision to life. Great experience!",
          image: "https://via.placeholder.com/100",
        },
        {
            name: "Robert Johnson",
            role: "Founder, InnovateNow",
            feedback:
              "Kishan's attention to detail and technical expertise brought our vision to life. Great experience!",
            image: "https://via.placeholder.com/100",
          },
          {
            name: "Robert Johnson",
            role: "Founder, InnovateNow",
            feedback:
              "Kishan's attention to detail and technical expertise brought our vision to life. Great experience!",
            image: "https://via.placeholder.com/100",
          },
          {
            name: "Robert Johnson",
            role: "Founder, InnovateNow",
            feedback:
              "Kishan's attention to detail and technical expertise brought our vision to life. Great experience!",
            image: "https://via.placeholder.com/100",
          },
      ];
      
  return (
    <div>
        <nav>
            <Header />
        </nav>
        <Hero />
        <div className="testimonials-container">
      <h2 className="text-center fw-bold mb-4">What Clients Say</h2>
      <div className="carousel-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={`${testimonial.name}`} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h5 className="testimonial-name">{testimonial.name}</h5>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <GetinTouch />
    <footer>
        <Footer/>
    </footer>
    </div>
  )
}

export default Testimonial;