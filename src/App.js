import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickyButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ClickyButton() {
  const [numClicks, setNumClicks] = useState(0);
  return (
    <button onClick={() => setNumClicks(numClicks + 1)}>
      I have been clicked {numClicks} times
    </button>
  );
}

export default App;
