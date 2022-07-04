import React from "react";
import "../Resume/Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div>Resume</div>
      <div>Skils & Experince</div>
      <div className="education-column">
        <div>
          <div>Education</div>
          <div>
            <EducationItem></EducationItem>
            <EducationItem></EducationItem>
            <EducationItem></EducationItem>
          </div>
        </div>
        <div>
          <div>Experince</div>
          <div>
            <EducationItem></EducationItem>
            <EducationItem></EducationItem>
            <EducationItem></EducationItem>
          </div>
        </div>
        <div>
          <div>Skils</div>
          <SkillItem></SkillItem>
          <SkillItem></SkillItem>
          <SkillItem></SkillItem>
          <SkillItem></SkillItem>
          <SkillItem></SkillItem>
        </div>
      </div>
    </div>
  );
};

const SkillItem = () => {
  return (
    <div className="skils-item">
      <div className="ed-circle"></div>
      <p className="skils-item-text">Flutter Developer</p>
    </div>
  );
};

const EducationItem = () => {
  return (
    <div className="education-content">
      <div className="education-line">
        <div className="ed-circle"></div>
        <div className="ed-line"></div>
      </div>
      <div className="ed-info">
        <p className="ed-item">Vishnu Institute of Technology</p>
        <p className="ed-item">Bhimvaram, Andrapradesh</p>
        <p className="ed-item">Aug 2017 to May 2021</p>
      </div>
    </div>
  );
};

export default Resume;
