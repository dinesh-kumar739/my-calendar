import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./header.jsx";
import Today from "./today.jsx";
import Work from "./work.jsx";
import "./index.css";

function Root() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <React.StrictMode>
      <Header dark={dark} setDark={setDark} />
      <div className="parent">
        <div className="leftdiv">
          <Today />
          <App />
        </div>
        <div className="rightdiv">
          <Work />
        </div>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);