import "./App.css";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Canvas from "./components/Canvas";
import AddFeatures from "./components/AddFeatures";
import ClearButton from "./components/ClearButton";
import StickyNote from "./components/StickyNote";

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [previewSource, setPreviewSource] = useState([]);
  const canvasRef = useRef(null);

  const clearDrawings = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#0db9a1";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const clearImages = () => {
    setPreviewSource([]);
  };

  const clearNotes = () => {
    setNotes([]);
  };

  // stops any other events from firing when dragging
  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="app" onDragOver={dragOver}>
      <div className="title">
        <img
          src="https://www.teachwithkoala.com/img/icons/koala-logo-icon.svg"
          alt="Koala logo"
        />
        <h1>Sticky Notes!</h1>
      </div>

      <div className="main-features">
        <AddFeatures
          previewSource={previewSource}
          setPreviewSource={setPreviewSource}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          notes={notes}
          setNotes={setNotes}
        />

        <div className="clear-buttons">
          <ClearButton handleClick={clearNotes}>Notes</ClearButton>
          <ClearButton handleClick={clearDrawings}>Drawings</ClearButton>
          <ClearButton handleClick={clearImages}>Images</ClearButton>
        </div>
      </div>

      {notes.map((stickyNote, i) => (
        <StickyNote
          key={i}
          stickyNote={stickyNote}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
      <Canvas
        canvasRef={canvasRef}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}

export default App;
