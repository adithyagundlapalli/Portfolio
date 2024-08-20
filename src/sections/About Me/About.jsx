import React from "react";
import './AboutStyles.css'; // Import the CSS file

export default function Component() {
  return (
    <>
      <div id="about">
      <div className="information">
        <div className="center-align">
          <h1 className="heading">About Me</h1>
          <p className="desc">
            {`From my freshman year in high school, I have immersed myself in the
world of programming, cultivating a deep passion for problem-solving
through code. Proficient in an array of programming languages and
frameworks, including Python, HTML, CSS, JavaScript, and Angular, I
bring a versatile skill set to the table. Currently interning at
Intern Protege as a web developer, I am gaining valuable hands-on
experience and further honing my abilities in the ever-evolving
field of computer science.`}
          </p>
          <div className="tabs">
            <p className="t active-link">Skills</p>
            <p className="t">Experience</p>
            <p className="t">Education</p>
          </div>
          <div id="skills" className="tab-contents active-tab">
            <p className="tab-title">Technologies/Tools:</p>
            <ul className="skills-content">
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Figma</li>
            </ul>
          </div>
          <div id="experience" className="tab-contents">
            <p className="tab-title">Experience</p>
            <ul className="skills-content">
              <li>Web Development Intern @ Intern Protege</li>
            </ul>
          </div>
          <div id="education" className="tab-contents">
            <p className="tab-title">Education</p>
            <ul className="skills-content">
              <li>Mountain House High School</li>
              <li>University of California: Santa Cruz</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
