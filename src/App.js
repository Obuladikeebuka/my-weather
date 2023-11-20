import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />

        <footer>
          This project was coded by Theresa Obuladike and is{" "}
          <a
            href="https://github.com/Theresa7777/my-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
