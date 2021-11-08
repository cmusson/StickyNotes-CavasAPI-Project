import React from "react";

const ClearCanvasButton = ({ canvasRef }) => {
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#0db9a1";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <button className="clear-canvas" onClick={clearCanvas}>
      Clear Drawings
    </button>
  );
};

export default ClearCanvasButton;
