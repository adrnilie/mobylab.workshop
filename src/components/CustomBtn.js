import React from "react";
import "./custombtn.scss";

const CustomBtn = ({ text, onClick, variant }) => (
  <button
    type="button"
    className="my-custom-btn"
    style={{ backgroundColor: variant }}
    onClick={onClick}
  >
    {text}
  </button>
);

export default CustomBtn;
