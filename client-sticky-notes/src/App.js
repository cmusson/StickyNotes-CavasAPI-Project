import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Canvas } from "./Canvas";
import { ClearCanvasButton } from "./ClearCanvasButton";

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  // creates note object and stores in array
  const addNote = (e) => {
    // stops page rerendering
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 22),
      top: 100,
      left: 400,
      color: "#ffc145",
    };

    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  // stops any other events from firing when dragging
  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  // places the note in the new location by assigning new x and y coordinates to the object
  const dropNote = (e) => {
    let left = e.pageX - 120;
    let top = e.pageY;

    let updatedNotes = notes;
    updatedNotes.forEach((el) => {
      if (el.id === e.target.id) {
        el.left = left;
        el.top = top;
      }
    });
    setNotes([...updatedNotes]);
  };

  // edits the text in the selected note
  const editNote = (e) => {
    let updatedNotes = notes;
    updatedNotes.forEach((el) => {
      if (el.id === e.currentTarget.id) {
        el.text = e.target.value;
      }
    });
    setNotes([...updatedNotes]);
  };

  // deletes the note via filter method
  const deleteNote = (e) => {
    let updatedNotes = notes.filter((note) => note.id !== e.currentTarget.id);
    setNotes([...updatedNotes]);
  };

  // changes color of the note when selected
  const changeColor = (e) => {
    let updatedNotes = notes;
    updatedNotes.forEach((el) => {
      if (el.id === e.target.parentNode.id) {
        el.color = e.target.id;
      }
    });
    setNotes([...updatedNotes]);
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
        <form className="input-form" onSubmit={addNote}>
          <textarea
            className="input"
            value={noteInput}
            onChange={(event) => setNoteInput(event.target.value)}
            placeholder="Create a new note"
          ></textarea>
          <button className="add-button">Add</button>
        </form>
        <div className="clear-buttons">
          <button className="clear-button" onClick={() => setNotes([])}>
            Clear Notes
          </button>
          <ClearCanvasButton />
        </div>
      </div>

      {notes.map((stickyNote) => (
        <div
          className="note"
          id={stickyNote.id}
          draggable="true"
          onDragEnd={dropNote}
          style={{
            transform: `rotate(${stickyNote.rotate}deg)`,
            left: `${stickyNote.left}px`,
            top: `${stickyNote.top}px`,
            backgroundColor: stickyNote.color,
          }}
        >
          <div className="delete" onClick={deleteNote} id={stickyNote.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" />
            </svg>
          </div>
          <div className="form-colors">
            <form className="note-form">
              <textarea
                id={stickyNote.id}
                className="note-body"
                value={stickyNote.text}
                onChange={editNote}
              ></textarea>
            </form>
            <div className="pallet" id={stickyNote.id}>
              <div className="white color" id={"white"} onClick={changeColor} />
              <div className="red color" id={"#ef476f"} onClick={changeColor} />
              <div
                className="blue color"
                id={"#007aff"}
                onClick={changeColor}
              />
              <div
                className="yellow color"
                id={"#ffc145"}
                onClick={changeColor}
              />
            </div>
          </div>
        </div>
      ))}
      <Canvas style={{ backgroundColor: "green" }} />
    </div>
  );
}

export default App;
