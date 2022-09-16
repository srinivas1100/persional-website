import React from "react";
import CustomButton from "../CustomButton";
import "../Home/Home.css";
import HomeImage from "./HomeImage";
import { Link } from "react-scroll";

const Home = () => {
  const onTaped = () => {
    console.log("this function was tapped")
  }

  return (
    <div className="home">
      <div className="left-container">
        <h1 className="padding">Hello</h1>
        <div className="animation-text">
          <div className="static-text">I am</div>
          <ul className="dynamic-text">
            <li>
              <span>Flutter Developer</span>
            </li>
            <li>
              <span>Web Developer</span>
            </li>
            <li>
              <span>Node Developer</span>
            </li>
            <li>
              <span>API's Developer</span>
            </li>
          </ul>
        </div>
        <p className="discription padding">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut
          dicta dolor numquam quia, nostrum dolorem doloremque itaque.
        </p>
        <CustomButton className="padding" name="Hire Me" onClick={onTaped}><Link className="background" to="contact-us" spy={true} smooth={true} offset={-70} duration={500} >Hire Me</Link></CustomButton>
      </div>
      <HomeImage></HomeImage>
    </div>
  );
};

export default Home;
