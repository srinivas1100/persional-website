import React from "react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="logo">Srinu</div>
      <div></div>
      <div className="app-bar-items">
        <span className="app-bar-single-item">Home</span>
        <span className="app-bar-single-item">About</span>
        <span className="app-bar-single-item">Resume</span>
        <span className="app-bar-single-item">Portfilio</span>
        <div className="app-bar-contact-me-item app-bar-single-item">Contact me</div>
      </div>
    </div>
  );
};

export default AppBar;
