import { useState, useEffect } from "react";
import useDate from "./date.jsx";
import "./App.css";
import "./global.css";

function App() {

  const today = new Date();
  const { day } = useDate();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  return (
    <div className="container">
      <div className="content-section">
        <div className="calendar">
          <div className="grid">
            {Array.from({ length: daysInMonth }, (_, i) => (
              <div key={i} className={`day ${i+1===day?"today":""}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;