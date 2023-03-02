import React from "react";

const ClearButton = ({ children, handleClick }) => {
  return (
    <button className="clear-button" onClick={handleClick}>
      <h4>Clear</h4>
      <h4>{children}</h4>
    </button>
  );
};

export default ClearButton;
