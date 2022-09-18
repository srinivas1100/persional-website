import React from "react";
import "../Resume/Resume.css";
import Skills from '../../helpers/SkillsJson.js'
import Experince from '../../helpers/ExperenceJson.js'
import Education from '../../helpers/EducationJson.js'

const Resume = () => {
  return (
    <div className="resume">
      <div className="title">Experence</div>
      <div className="wrap-elements">
        {Experince.map((a) => <EduExpCard key={a.key} title={a.path} collage={a["companey-name"]} location={a.location} date={a.experence}></EduExpCard>)}
      </div>
      <p className="title">Education</p>
      <div className="wrap-elements">
        {Education.map((a) => <EduExpCard key={a.key} title={a.title} collage={a["collage-name"]} location={a.location} date={a["passed-out"]}></EduExpCard>)}


      </div>

      <div className="title">Skils</div>
      <div className="wrap-elements">
        {Skills.map((a) =>
          <SkillsCard key={a.key} title={a.skill} value={a.value}></SkillsCard>
        )}
      </div>
    </div>
  );
};



const EduExpCard = ({ title, collage, location, date }) => {
  return (
    <div className="education-card">
      <div className="top-tile">
        <p className="headding">{title}</p>
        <p className="sub-hedding">{collage}</p>
      </div>
      <div className="location">
        <span className="loc-year">{location}</span>
        <span className="loc-year">{date}</span>
      </div>
    </div>
  )
};

const SkillsCard = ({ title, value }) => {
  return (
    <div className="skill-card">
      <p className="headding">{title}</p>
      <input className="range-select" type="range" min="0" max="10" step="1" defaultValue={value} ></input>
    </div>
  )
};

export default Resume;
