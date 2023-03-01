import React from "react";

const ClearButton = ({ children, handleClick }) => {
  return (
    <button className="clear-canvas" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ClearButton;
