import React from "react";
import CustomButton from "../CustomButton";
import "../Home/Home.css";

const Home = () => {
const onTaped = () => {
  console.log("this function was tapped")
}

  return (
    <div className="home">
      <div className="left-container">
        <h1>Hello</h1>
        <div className="animation-text">
          <div className="static-text">I Am</div>
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
        <p className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut
          dicta dolor numquam quia, nostrum dolorem doloremque itaque.
        </p>
        <CustomButton  name="Hire Me" onClick={onTaped}></CustomButton>
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
