import React, { useState } from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Info from '../components/info';
import GetinTouch from '../components/GetinTouch';
import '../styles/Contact.css'

const Contact = () => {
    // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      const data = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send data to your server or API (adjust the URL as needed)
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data
      });

      if (response.ok) {
        alert("Thank you for submitting the information!");
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

    
  return (
    <div>
        <nav>
            <Header/>
        </nav>
        <Hero/>
        <div className="contact-container">
      <div className="form-wrapper">
        <h2 className="text-center mb-4 fw-bold">Contact Me</h2>
        <p className="text-center mb-4 text-muted">
          Feel free to reach out by filling out the form below, and I’ll get back to you as soon as possible!
        </p>

        <div className="card shadow-lg border-0">
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              {/* Message Input */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Info />
    <GetinTouch/>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Contact;