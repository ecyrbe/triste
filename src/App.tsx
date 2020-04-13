import React from "react";
import "./App.css";
import { Board } from "./components/board";

function App() {
  return (
    <div className="App">
      <Board width={10} height={20} />
    </div>
  );
}

export default App;
