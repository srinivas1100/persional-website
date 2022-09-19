import { React, useState } from "react";
import "../Portfolio/Portfolio.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Projects, ProjectType } from "../../helpers/projectJson";

const Portfolio = () => {

  const [changeTabs, setChangeTabs] = useState("");
  const [listProjects, setProjects] = useState(Projects);

  const onPress = (index) => {
    setChangeTabs(index);
    setProjects(
      Projects.filter((f) => {
        return f.type.toString().toLowerCase() === index.toString().toLowerCase();
      })
    )
    console.log(changeTabs)
    console.log(`clicked ${index}`);
  };


  return (
    <div className="portfolio">
      <div className="title">Portfolio</div>
      <div className="tab-bar">


        <TabItem className={changeTabs === ProjectType.Flutter ? "selet-tab-style" : "tab-bar-item"} title="Flutter" onClick={() => onPress(ProjectType.Flutter)} />
        <TabItem className={changeTabs === ProjectType.React ? "selet-tab-style" : "tab-bar-item"} title="Web Development" onClick={() => onPress(ProjectType.React)} />
        <TabItem className={changeTabs === ProjectType.Node ? "selet-tab-style" : "tab-bar-item"} title="Node" onClick={() => onPress(ProjectType.Node)} />
        <TabItem className={changeTabs === ProjectType.Docker ? "selet-tab-style" : "tab-bar-item"} title="API's" onClick={() => onPress(ProjectType.Docker)} />

      </div>
      <div className="projects-container">
        {listProjects
          .map((a) => <ProjectCard
            key={a.key}
            imageUrl={a.image === "" ? "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" : a.image}
            projectName={a.title}
            projectDescription={a["short-des"]} 
            longdis={a["long-des"]} sourcecode={a["source-code"]} ></ProjectCard>)}
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
