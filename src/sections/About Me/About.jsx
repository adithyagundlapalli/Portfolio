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
          
        </div>
      </div>
      </div>
    </>
  );
}
