import React from "react";
import "./Button.css";

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick} className="btn">
      {name}
    </button>
  );
};

export default Button;
