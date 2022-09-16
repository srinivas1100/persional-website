import React from "react";
import "./Home/Home.css";

const CustomButton = (props) => {
  const className = `hire-me + ${props.className}`;

  return (
    <div
      style={
        props.style
      }
      className={className}
      onClick={props.onClick}
    >{props.children}
      {/* <span className="text-style">{props.name}</span> */}
    </div>
  );
};

export default CustomButton;
