import React from "react";
import "./Box.css";
import DeleteButton from "./DeleteButton";

const Box = ({ height, width, color ,clicked}) => {
  return (
    <>
      
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: color,
          border: `1px solid ${color}`,
        }}
      ></div>
      
      
    </>
  );
};

export default Box;
