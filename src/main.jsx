import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./header.jsx";
import "./index.css";
import Today from "./today.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Today />
    <App />
  </React.StrictMode>
);