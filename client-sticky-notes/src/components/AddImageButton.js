import React from "react";

const AddImageButton = ({ previewSource, setPreviewSource }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource([...previewSource, reader.result]);
    };
  };

  const dropImage = (e) => {
    e.target.style.left = `${e.pageX - 140}px`;
    e.target.style.top = `${e.pageY - 200}px`;
  };

  return (
    <div>
      <form className="image-form">
        <label className="file-picker" htmlFor="filePicker">
          Add Image
        </label>
        <input
          id="filePicker"
          name="image"
          onChange={handleFileInputChange}
          style={{ visibility: "hidden" }}
          type={"file"}
        />
      </form>

      {previewSource &&
        previewSource.map((img) => (
          <div
            draggable="true"
            onDragEnd={dropImage}
            key={img}
            className="image"
          >
            <img
              src={img}
              alt="chosen file"
              style={{
                height: "200px",
                top: "200px",
                left: "400px",
                position: "absolute",
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default AddImageButton;
