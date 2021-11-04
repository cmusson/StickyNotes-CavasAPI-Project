import React from "react";
import "../components/StickyNote.css";

function StickyNote() {
  return (
    <div>
      <form className="sticky-note">
        <h3>I am a sticky note!</h3>
        <textarea placeholder="Create a new note!"></textarea>
      </form>
    </div>
  );
}

export default StickyNote;
