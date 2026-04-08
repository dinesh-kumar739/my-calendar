import React from "react";
import "./Header.css";

function Header({ dark, setDark }) {
  return (
    <header className="header">
      <div className="left">my calendar</div>
      <div className="header1">
        <button onClick={() => setDark(!dark)} className="theme">
          Theme
        </button>
      </div>
      <div className="right">Contact</div>
    </header>
  );
}

export default Header;
