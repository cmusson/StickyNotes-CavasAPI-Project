import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./AddButton";

const AddFeatures = ({
  previewSource,
  setPreviewSource,
  noteInput,
  setNoteInput,
  notes,
  setNotes,
}) => {
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
  return (
    <div className="add-features">
      <form className="input-form" onSubmit={addNote}>
        <textarea
          className="input"
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          placeholder="Create a new note"
        ></textarea>

        <AddButton
          type={"note"}
          previewSource={previewSource}
          setPreviewSource={setPreviewSource}
          addNote={addNote}
        />
      </form>
      <AddButton
        type={"image"}
        previewSource={previewSource}
        setPreviewSource={setPreviewSource}
        addNote={addNote}
      />
    </div>
  );
};

export default AddFeatures;
