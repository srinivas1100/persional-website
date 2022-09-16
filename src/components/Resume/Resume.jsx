import React from "react";
import "../Resume/Resume.css";
import Skills from '../../helpers/SkillsJson.js'
import Experince from '../../helpers/ExperenceJson.js'
import Education from '../../helpers/EducationJson.js'

const Resume = () => {
  return (

    <div>
      <div className="education-card">
        <p>B.Tech</p>
        <p>Vishnu Instute of technology</p>
        <div>

        <span>Bhimvaram</span>
        <span>2022</span>
        </div>
      </div>
    </div>
    // <div className="resume">
    //   <div className="transp">Skils & Experince</div>
    //   <div className="education-column transp">
    //     <div className="transp">
    //       <div className="transp" >Education</div>
    //       <div className="transp">
    //         {Education.map((educ => <EducationItem key={educ["key"]} collageName={educ["collage-name"]} location={educ.location} passedOut={educ["passed-out"]}  ></EducationItem>))}
    //       </div>
    //     </div>
    //     <div className="transp">
    //       <div className="transp">Experince</div>
    //       <div className="transp">
    //         {
    //           Experince.map((a) => <EducationItem key={a["key"]} collageName={a['companey-name']} location={a['path']} passedOut={a['experence']} ></EducationItem>)
    //         }

    //       </div>
    //     </div>
    //     <div className="transp">
    //       <div className="transp">Skils</div>
    //       {Skills.map((a) => <SkillItem key={a["key"]} title={a.skill}></SkillItem>)}

    //     </div>
    //   </div>
    // </div>

  );
};

const SkillItem = (props) => {
  return (
    <div className="skils-item transp">
      <div className="ed-circle transp"></div>
      <p className="skils-item-text transp">{props.title}</p>
    </div>
  );
};

const EducationItem = (props) => {
  return (
    <div className="education-content transp">
      <div className="education-line transp">
        <div className="ed-circle transp"></div>
        <div className="ed-line transp"></div>
      </div>
      <div className="ed-info transp">
        <p className="ed-item transp">{props.collageName}</p>
        <p className="ed-item transp">{props.location}</p>
        <p className="ed-item transp">{props.passedOut}</p>
      </div>
    </div>
  );
};

export default Resume;
