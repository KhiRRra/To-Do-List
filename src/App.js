import React, { Component } from "react";
import "./css/App.css";
import AddTask from "./components/AddTask.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask />
      </div>
    );
  }
}

export default App;
