import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CanvasProvider } from "./CanvasContext";

ReactDOM.render(
  <React.StrictMode>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
