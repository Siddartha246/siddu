// Professional-themed portfolio website for Siddartha Gundapu
import React from 'react';
import './App.css'; // Ensure you have the updated CSS file for styling

const App = () => {
  return (
    <div>
      <header className="header">
      <img
          src="profile.jpg"
          alt="Profile"
          className="profile-photo"
        />
        <h1>Gundapu Siddartha</h1>
        <a href="mailto:siddarthagundapu@gmail.com" target="_blank" rel="noopener noreferrer">siddarthagundapu@gmail.com</a>
        <div className="links">
        <a href="https://www.linkedin.com/in/siddartha-gundapu-066249288" target="_blank" rel="noopener noreferrer">LinkedIn  </a>
        <a href="https://github.com/Siddartha246" target="_blank" rel="noopener noreferrer">GitHub  </a>
        </div>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>Recent Computer Science graduate with internship experience in web development. Highly motivated with strong design and programming principles.</p>
        </section>

        <section className="skills" id="skills">
          <h2>Skills</h2>
          <div className="skills-logos">
            {['Java', 'Python', 'C', 'HTML', 'CSS', 'mySQL'].map((skill) => (
              <div className="skill-item" key={skill}>
                <img src={`/${skill.toLowerCase()}.png`} alt={skill} className="skill-logo" />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Library Management System:</strong>
              <p>A digital system for managing library operations, including book management and borrow/return functionalities. Built using C and SQL.</p>
            </li>
            <li>
              <strong>Medication Tracking System:</strong>
              <p>A web-based application providing medication reminders and refill notifications, as well as tracking medication history.</p>
            </li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <ul>
            <li>B.Tech in Computer Science, SR University, Warangal (2021-2025) | GPA: 7.3</li>
            <li>Board of Intermediate, SR Prime College, Warangal | Percentage: 76%</li>
            <li>SSC, SR Prime School, Warangal | Percentage: 61%</li>
          </ul>
        </section>

        <section className="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>NPTEL - Database Management System</li>
            <li>Cybersecurity Essentials - Cisco</li>
            <li>Web Development Internship</li>
          </ul>
        </section>

        <footer className="footer" id="contact">
          <p>Contact: siddarthagundapu@gmail.com | Phone: 8639358078</p>
          <p>&copy; 2024 Gundapu Siddartha</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
