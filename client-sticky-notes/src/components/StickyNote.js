import React from "react";
import "../components/StickyNote.css";

function StickyNote() {
  return (
    <div draggable="true">
      <form className="sticky-note">
        <textarea></textarea>
        <button className="add-button">Add Note</button>
      </form>
    </div>
  );
}

export default StickyNote;
