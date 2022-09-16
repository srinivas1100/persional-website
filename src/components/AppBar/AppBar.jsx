
import React, { useState } from "react";
import "./AppBar.css";
import { Link } from "react-scroll";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const AppBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  const showAndHide = () => {
    setIsMobile(!isMobile)
  }

  return (
    <nav className={isMobile ? "app-bar-mobile" : "app-bar"}>
      <div className={ isMobile ? "logo-items-mobile" : "logo-items"}>
        <div className="logo">Srinu</div>
        <div className={isMobile ? "app-bar-items-mobile" : "app-bar-items"}>
          <Link to="home" spy={true} smooth={true} offset={-60} duration={500} className="app-bar-single-item nav-item">Home</Link>
          <Link to="about-me" spy={true} smooth={true} offset={-70} duration={500} className="app-bar-single-item nav-item">About</Link>
          <Link to="resume" spy={true} smooth={true} offset={-70} duration={500} className="app-bar-single-item nav-item">Resume</Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="app-bar-single-item nav-item">Portfilio</Link>
          <Link to="contact-us" spy={true} smooth={true} offset={-70} duration={500} className="app-bar-contact-me-item app-bar-single-item nav-item">Contact me</Link>
        </div>
      </div>

      <div className="icon-button" onClick={showAndHide}>
        {isMobile ?
          <CloseIcon style={{ color: "var(--background-color)", background: "var(--primary-black-color)" }} /> :
          <MenuIcon style={{ color: "var(--background-color)", background: "var(--primary-black-color)" }} />}
      </div>






    </nav>
  );
};

export default AppBar;
