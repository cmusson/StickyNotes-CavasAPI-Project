import "./App.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StickyNote from "./components/StickyNote";

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 22),
      //top and left
    };

    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const dropNote = (e) => {
    e.target.style.left = `${e.pageX - 60}px`;
    e.target.style.top = `${e.pageY - 60}px`;
  };

  const editNote = (e) => {
    let updatedNotes = notes;
    updatedNotes.forEach((el) => {
      if (el.id === e.currentTarget.id) {
        el.text = e.target.value;
      }
    });
    setNotes([...updatedNotes]);
  };

  const deleteNote = (e) => {
    setNotes(notes.filter((note) => note.id !== e.currentTarget.id));
  };

  return (
    <div className="canvas" onDragOver={dragOver}>
      <h1>Sticky Notes!</h1>
      <form className="note-form" onSubmit={addNote}>
        <textarea
          className="input"
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          placeholder="create a new note"
        ></textarea>
        <button>Add</button>
      </form>
      {notes.map((stickyNote) => (
        <div
          className="note"
          id={stickyNote.id}
          draggable="true"
          onDragEnd={dropNote}
          style={{ transform: `rotate(${stickyNote.rotate}deg)` }}
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
          <form>
            <textarea
              id={stickyNote.id}
              className="note-body"
              value={stickyNote.text}
              onChange={editNote}
            ></textarea>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;
