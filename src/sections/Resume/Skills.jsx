import React from "react";
import "./SkillsStyles.css";  // Import the external CSS file
import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS


export default function Skills() {
  return (
    <div className="skills-container">
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline html" name="html-5">
          <i class='bx bxl-html5'></i>
            <p>HTML-5</p>
          </li>
          <li className="software-skill-inline css" name="css3">
          <i class='bx bxl-css3' ></i>
            <p>CSS-3</p>
          </li>
          <li className="software-skill-inline js" name="JavaScript">
          <i class='bx bxl-javascript' ></i>
            <p>JavaScript</p>
          </li>
          <li className="software-skill-inline jq" name="JQuery">
          <i class='bx bxl-jquery' ></i>
            <p>JQuery</p>
          </li>
          <li className="software-skill-inline react" name="React">
          <i class='bx bxl-react' ></i>
            <p>React</p>
          </li>
          <li className="software-skill-inline python" name="python">
          <i class='bx bxl-python' ></i>
            <p>Python</p>
          </li>
          <li className="software-skill-inline node" name="nodejs">
          <i class='bx bxl-nodejs' ></i>
            <p>Node JS</p>
          </li>
          <li className="software-skill-inline java" name="Java">
          <i class='bx bxl-java' ></i>
            <p>Java</p>
          </li>
         
          <li className="software-skill-inline cplus" name="C/C++">
          <i class='bx bxl-c-plus-plus' ></i>
            <p>C/C++</p>
          </li>
          <li className="software-skill-inline git" name="git">
          <i class='bx bxl-git' ></i>
            <p>Git</p>
          </li>
          <li className="software-skill-inline github" name="github">
          <i class='bx bxl-github' ></i>
            <p>GitHub</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
