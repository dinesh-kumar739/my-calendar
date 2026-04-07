import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CalendarLayout from "./CalendarLayout.jsx";
import Header from "./header.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <CalendarLayout />
  </React.StrictMode>
);