import Work from "./Work.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content-section">
        <div className="calendar">
          <div className="grid">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="day">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <Work />
      </div>
    </div>
  );
}

export default App;