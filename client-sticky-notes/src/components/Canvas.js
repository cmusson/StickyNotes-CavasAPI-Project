import React, { useEffect, useRef, useState } from "react";

function Canvas({ canvasRef }) {
  // canvasRef //
  //create ref in order to work with the canvas inside the react component
  // ref object to hold reference to canvas reference
  // need to get the DOM canvas element itself to get its context object

  // context needs to be used in DWG functions so create a state for it
  // can use ref obj to store refe for elements and also preserve any info you need between re-renders e.g. 2d context
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  // initalise canvas api when component is mounted
  useEffect(() => {
    // reference to canvas
    const canvas = canvasRef.current;
    // windoen.innerWidth is the width of viewport of browser
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // define the 2d context to be able to draw on the canvas
    // context needs to be used in DWG functions so create a state for it
    const context = canvas.getContext("2d");
    // inital settings for our context
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    contextRef.current.closePath();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default Canvas;
