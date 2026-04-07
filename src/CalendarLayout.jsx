import React from "react";
import "./CalendarLayout.css";

function CalendarLayout() {
  return (
    <div className="container">
      {/* Left diagonal image */}
      <div
        className="image-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        {/* Welcome text on top of image */}
        <div className="welcome-text">Welcome</div>
      </div>

      {/* Right triangle content: calendar dates */}
      <div className="content-section">
        <h1>April 2026</h1>
        <div className="grid">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="day">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarLayout;