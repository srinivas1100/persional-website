import React from "react";
import "../Portfolio/Portfolio.css";
import ProjectCard from "../ProjectCard/ProjectCard";

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
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>
        <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard>


      </div>
    </div>
  );
};

// const ProjectCard = () => {
//   return (
//     <div className="project-card">
//       <div className="project-card-image">img</div>
//       <p className="project-name">first project</p>
//       <p className="project-discription">project description</p>
//     </div>
//   );
// };

export default Portfolio;
