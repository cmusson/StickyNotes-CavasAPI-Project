import React, { useEffect, useRef, useState } from "react";

function Canvas() {
  // ref object that will hold the reference to our canvas element
  const canvasRef = useRef(null);
  // to access the context reference in drawing functions
  const contextRef = useRef(null);
  // check if button is pressed
  const [isDrawing, setIsDrawing] = useState(false);

  //initialise canvas api when component is mounted
  useEffect(() => {
    const canvas = canvasRef.current;
    // increase pixel size for higher resolution screens
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    // canvas size
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;
    // 2D context to draw on canvas
    const context = canvas.getContext("2D");
    // context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    // to draw the stroke
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMuouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default Canvas;
