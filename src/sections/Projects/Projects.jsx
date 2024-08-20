import React from 'react';
import './ProjectsStyles.css';

export default function Projects() {
  return (
    <div id='portfolio' className="container">
      <h1 className="subtitle">Portfolio</h1>
      <div className="project-list">
        <div className="project">
          <a
            href="https://github.com/adithyagundlapalli/simplecalculator.git"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="proj-img"
              alt="calculator project"
              src="https://adithyagundlapalli.github.io/personalportfolio/img/calculator.jpeg"
            />
          </a>
          <div className="proj">
            <h1 className="proj-title">Simple Calculator with GUI</h1>
            <p className="proj-description">
                I recently created a beginner-friendly calculator with a graphical user interface using Python's Tkinter. This project marked my introduction to Tkinter, allowing me to explore the basics of GUI development while crafting a simple and visually appealing tool for basic arithmetic operations. The clean design and intuitive interface make it a great starting point for my journey into more complex Tkinter projects.
            </p>
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/adithyagundlapalli/personalportfolio.git"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="proj-img"
              alt="personal portfolio website"
              src="https://adithyagundlapalli.github.io/personalportfolio/img/website.png"
            />
          </a>
          <div className="proj">
            <h1 className="proj-title">Personal Portfolio Website</h1>
            <p className="proj-description">
                I delved into front-end and web development by creating a personal portfolio website using HTML, CSS, and JavaScript. This project not only demonstrates my proficiency in these technologies but also serves as a dynamic self-marketing tool, showcasing my projects and skills to potential opportunities. The website is more than a resume; it's a visually engaging representation of my journey and capabilities in the evolving field of front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
