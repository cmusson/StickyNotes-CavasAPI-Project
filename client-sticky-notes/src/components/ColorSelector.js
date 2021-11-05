import React from "react";
import "../components/ColorSelector.css";

function ColorSelector() {
  // changes color of sticky note
  const changeColor = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <div className="pallet">
      <div className="white color" onClick={changeColor} />
      <div className="red color" onClick={changeColor} />
      <div className="blue color" onClick={changeColor} />
      <div className="yellow color" onClick={changeColor} />
    </div>
  );
}

export default ColorSelector;
