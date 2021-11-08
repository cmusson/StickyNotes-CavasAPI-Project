import React from "react";

const ClearImagesButton = ({ setPreviewSource }) => {
  const clearImages = () => {
    setPreviewSource([]);
  };

  return (
    <button className="clear-canvas" onClick={clearImages}>
      Clear Images
    </button>
  );
};

export default ClearImagesButton;
