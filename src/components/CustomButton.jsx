import React from "react";
import "./Home/Home.css";

const CustomButton = (props) => {
  // const style = {
  //   color: props.color,
  //   background: props.background,
  //   borderRadius: props.borderRadius,
  //   boxShadow: props.boxShadow,
    
  // };

  return (
    <div
      style={
        props.style
        //     {
        //     color: props.color,
        //     background: props.background,
        //     borderRadius: props.borderRadius,
        //     boxShadow: props.boxShadow,
        //   }
      }
      className="hire-me"
      onClick={props.onClick}
    >
      <span>{props.name}</span>
    </div>
  );
};

export default CustomButton;
