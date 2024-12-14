import React from 'react';
import '../styles/Projects.css'; // Import your CSS for styling
import Header from '../components/Header';
import Hero from '../components/Hero';
import GetinTouch from '../components/GetinTouch';
import Footer from '../components/Footer';
import Skill from '../components/Skill';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'An advanced e-commerce platform with state management, API fetching, and a user-friendly interface.',
    image: 'ecommerce.png',
    link: '/ecommerce-project'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application built using Firebase and React for instant messaging.',
    image: 'chatapp.jpg',
    link: '/chat-app'
  },
  {
    title: 'Crypto Dashboard',
    description: 'A cryptocurrency dashboard that tracks real-time prices and trends of various cryptocurrencies.',
    image: 'admindash.jpg',
    link: '/crypto-dashboard'
  },
  {
    title: 'AI Chatbot',
    description: 'A smart AI-powered chatbot for handling user queries and providing personalized responses.',
    image: 'jarvis.png',
    link: '/ai-chatbot'
  },
  {
    title: 'Portfolio-site',
    description: 'A smart AI-powered chatbot for handling user queries and providing personalized responses.',
    image: 'portfolio.png',
    link: '/portfolio'
  },
  {
    title: 'Education-Platform',
    description: 'A smart AI-powered chatbot for handling user queries and providing personalized responses.',
    image: 'education.jpg',
    link: '/education'
  },
  {
    title: 'Todo-List',
    description: 'A smart AI-powered chatbot for handling user queries and providing personalized responses.',
    image: 'todo-list.jpg',
    link: '/todo'
  },
  {
    title: 'Gemini',
    description: 'A smart AI-powered chatbot for handling user queries and providing personalized responses.',
    image: 'gemini.jpg',
    link: '/gemini'
  },
];

const Projects = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <Hero />
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <p className="projects-subheading">
        Explore some of the amazing projects I’ve worked on. Click to view the full project details.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Skill />
    <GetinTouch />
    <footer>
        <Footer />
    </footer>
    </div>
  );
};

export default Projects;
