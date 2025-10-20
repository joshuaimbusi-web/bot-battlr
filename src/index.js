// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles.css"; // optional: for your custom styles

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

