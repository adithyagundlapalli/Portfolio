import React from 'react';
import './ProjectsCard.css';
import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS



const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="projects-card">
      <div className="projects-card-img-wrapper">
        <img
          className="projects-card-img"
          src={src}
          alt="project"
        />
      </div>
      <div className="projects-card-content">
        <div>
          <div className="projects-card-header">
            <h3 className="projects-card-title">{title}</h3>
            <div className="projects-card-icons">
              <span className="projects-card-icon">
              <i className="bx bxl-github" />
              </span>
            </div>
          </div>
          <p className="projects-card-description">{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
