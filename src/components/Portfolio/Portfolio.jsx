import { React, useState } from "react";
import "../Portfolio/Portfolio.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = () => {

  const [changeTabs, setChangeTabs] = useState(1);

  const onPress = (index) => {
    setChangeTabs(index);
    console.log(changeTabs)
    console.log(`clicked ${index}`);
  };
  return (
    <div className="portfolio">
      <div>Portfolio</div>
      <div className="tab-bar">


        <TabItem className={changeTabs === 1 ? "selet-tab-style" : "tab-bar-item"} title="Flutter" onClick={() => onPress(1)} />
        <TabItem className={changeTabs === 2 ? "selet-tab-style" : "tab-bar-item"} title="Web Development" onClick={() => onPress(2)} />
        <TabItem className={changeTabs === 3 ? "selet-tab-style" : "tab-bar-item"} title="Node" onClick={() => onPress(3)} />
        <TabItem className={changeTabs === 4 ? "selet-tab-style" : "tab-bar-item"} title="API's" onClick={() => onPress(4)} />

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



const TabItem = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>{props.title}</div>
  )
}


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
