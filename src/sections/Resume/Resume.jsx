import React from "react";
import "./ResumeStyles.css"; // Import the external CSS file
import Skills from "./Skills"; // Import the Skills component
import WorkExperience from "./WorkExperience"; // Import the WorkExperience component

export default function Resume() {
  const opentab = (event, tabname) => {
    const tablinks = document.getElementsByClassName("resume-item");
    const tabcontents = document.getElementsByClassName("tab-contents");

    // Remove active-link from all tabs
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    // Remove active-tab from all tab contents
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    // Add active-link to the clicked tab
    event.currentTarget.classList.add("active-link");
    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
  };

  return (
    <section id="portfolio" className="resume-section">
      <div className="resume-header">
        <div className="resume-title-container">
          <h1 className="resume-title">Portfolio</h1>
        </div>
      </div>
      <div className="list-container">
        <ul className="resume-list">
          <li
            className="resume-item active-link" 
            onClick={(e) => opentab(e, "education")}
          >
            Education
          </li>
          <li
            className="resume-item"
            onClick={(e) => opentab(e, "experience")}
          >
            Experience
          </li>
          <li
            className="resume-item"
            onClick={(e) => opentab(e, "projects")}
          >
            Projects
          </li>
          <li
            className="resume-item"
            onClick={(e) => opentab(e, "skills")}
          >
            Skills
          </li>
        </ul>
      </div>
      <div id="education" className="tab-contents active-tab">
        <h2>Education</h2>
        <p>
          I am currently pursuing a Bachelor's degree in Computer Science at
          the University of California, San Diego.
        </p>
      
      </div>
      <div id="experience" className="tab-contents">
        <WorkExperience></WorkExperience>
      </div>
      <div id="projects" className="tab-contents">
        <h2>Projects</h2>
        <p>Details about projects go here.</p>
      </div>
      <div id="skills" className="tab-contents">
        <Skills></Skills>
      </div>
    </section>
  );
}
