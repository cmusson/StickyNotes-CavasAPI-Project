import React from "react";
import { useCanvas } from "./CanvasContext";
import "./ClearCanvasButton.css";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button className="clear-canvas" onClick={clearCanvas}>
      Clear Drawings
    </button>
  );
};
