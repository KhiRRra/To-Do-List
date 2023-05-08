import React, { Component } from "react";
import "./style/App.css";
import AddTask from "./components/AddTask.js";
import 'bootstrap/dist/css/bootstrap.min.css';

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
