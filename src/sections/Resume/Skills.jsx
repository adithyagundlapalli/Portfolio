import React from "react";
import "./SkillsStyles.css";  // Import the external CSS file

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline" name="html-5">
            <i className="fab fa-html5" />
            <p>html-5</p>
          </li>
          <li className="software-skill-inline" name="css3">
            <i className="fab fa-css3-alt" />
            <p>css3</p>
          </li>
          <li className="software-skill-inline" name="Java">
            <i className="fab fa-java" />
            <p>Java</p>
          </li>
          <li className="software-skill-inline" name="React">
            <i className="fab fa-react" />
            <p>React</p>
          </li>
          <li className="software-skill-inline" name="nodejs">
            <i className="fab fa-node" />
            <p>nodejs</p>
          </li>
          <li className="software-skill-inline" name="npm">
            <i className="fab fa-npm" />
            <p>npm</p>
          </li>
          <li className="software-skill-inline" name="SQL">
            <i className="fas fa-database" />
            <p>SQL</p>
          </li>
          <li className="software-skill-inline" name="JavaScript">
            <i className="fa-brands fa-square-js" />
            <p>JavaScript</p>
          </li>
          <li className="software-skill-inline" name="Android Studio">
            <i className="fab fa-android" />
            <p>Android Studio</p>
          </li>
          <li className="software-skill-inline" name="bootstrap">
            <i className="fab fa-bootstrap" />
            <p>bootstrap</p>
          </li>
          <li className="software-skill-inline" name="python">
            <i className="fab fa-python" />
            <p>python</p>
          </li>
          <li className="software-skill-inline" name="C/C++">
            <i className="fab fa-c" />
            <p>C/C++</p>
          </li>
          <li className="software-skill-inline" name="git">
            <i className="fab fa-github" />
            <p>git</p>
          </li>
          <li className="software-skill-inline" name="AWS">
            <i className="fab fa-aws" />
            <p>AWS</p>
          </li>
          <li className="software-skill-inline" name="Confluence">
            <i className="fab fa-confluence" />
            <p>Confluence</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
