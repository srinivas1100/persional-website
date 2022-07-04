import React from "react";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  const onPress = () => {
    console.log("clicked");
  };
  return (
    <div className="portfolio">
      <div>Portfolio</div>
      <div className="tab-bar">
        <div className="tab-bar-item" onClick={onPress}>
          Flutter
        </div>
        <div className="tab-bar-item">Web Development</div>
        <div className="tab-bar-item">Node</div>
        <div className="tab-bar-item">API's</div>
      </div>
      <div className="projects-container">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card-image">img</div>
      <p className="project-name">first project</p>
      <p className="project-discription">project description</p>
    </div>
  );
};

export default Portfolio;
