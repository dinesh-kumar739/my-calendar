import "./App.css";

function App() {
  return (
    <div className="container">
      
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="calendar visual"
        />
      </div>

      <div className="content-section">
        
        {/* Calendar */}
        <div className="calendar">
          <h2>April 2026</h2>

          <div className="grid">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="day">
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="notes">
          <h3>Notes</h3>
          <textarea placeholder="Write your notes here..."></textarea>
        </div>

      </div>
    </div>
  );
}

export default App;