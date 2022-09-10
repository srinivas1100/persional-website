import React from "react";
import "../Resume/Resume.css";
import Skills from '../../helpers/SkillsJson.js'
import Experince from '../../helpers/ExperenceJson.js'
import Education from '../../helpers/EducationJson.js'

const Resume = () => {
  return (
    <div className="resume">

      <div>Skils & Experince</div>
      <div className="education-column">
        <div>
          <div>Education</div>
          <div>
            {Education.map((educ => <EducationItem collageName={educ["collage-name"]} location={educ.location} passedOut={educ["passed-out"]}  ></EducationItem>))}

          </div>
        </div>
        <div>
          <div>Experince</div>
          <div>
            {
              Experince.map((a) => <EducationItem collageName={a['companey-name']} location={a['path']} passedOut={a['experence']} ></EducationItem>)
            }

          </div>
        </div>
        <div>
          <div>Skils</div>
          {Skills.map((a) => <SkillItem title={a.skill}></SkillItem>)}

        </div>
      </div>
    </div>
  );
};

const SkillItem = (props) => {
  return (
    <div className="skils-item">
      <div className="ed-circle"></div>
      <p className="skils-item-text">{props.title}</p>
    </div>
  );
};

const EducationItem = (props) => {
  return (
    <div className="education-content">
      <div className="education-line">
        <div className="ed-circle"></div>
        <div className="ed-line"></div>
      </div>
      <div className="ed-info">
        <p className="ed-item">{props.collageName}</p>
        <p className="ed-item">{props.location}</p>
        <p className="ed-item">{props.passedOut}</p>
      </div>
    </div>
  );
};

export default Resume;
