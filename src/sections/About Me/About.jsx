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
            {`I have immersed myself in the world of programming, cultivating a deep passion for problem-solving through code. Proficient in a variety of programming languages and frameworks, I hope to bring a versatile skill set to the table. I recently completed an internship at Intern Protege as a web developer, where I have gained valuable hands-on experience, further honing my abilities in the ever-evolving field of computer science.`}
          </p>
          <br />
          <p className="desc">Education: University of California, Santa Cruz: B.S. in Computer Science <br /> <br />Concentrations: Software Engineering <br />Related Coursework: Data Structures and Algorithms, Object-Oriented Programming, Programming Abstractions: Python, Computer Systems and Assembly Language and Lab, Discrete Mathematics </p>
          
        </div>
      </div>
      </div>
    </>
  );
}
