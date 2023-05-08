import React, { Component } from "react";
import TaskList from "./TaskList";
import "../style/AddTask.css";
import "bootstrap/dist/css/bootstrap.min.css";

let minDate = new Date().toISOString().slice(0, 10);
class AddTask extends Component {
  state = {
    value: "",
    important: false,
    date: new Date().toISOString().slice(0, 10),

    tasks: [
      {
        id: 1,
        text: "zrobić zakupy",
        date: "2023-04-30",
        important: true,
        active: true,
        finishDate: "",
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleChangeCheckbox = () => {
    this.setState({
      important: !this.state.important,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleAddTask = () => {
    const task = {
      id: this.state.tasks.length + 1,
      text: this.state.value,
      date: this.state.date,
      important: this.state.important,
      active: true,
    };
    if (this.state.value.length > 0) {
      const tasks = [...this.state.tasks];
      tasks.push(task);
      console.log(task);

      this.setState({
        tasks,
        value: "",
        date: new Date().toISOString().slice(0, 10),
        important: false,
      });

      return true;
    } else return;
  };

  handleTaskDone = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  handleDelete = (id) => {
    let tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
      
    this.setState({
        tasks: tasks,
      });
  };


  handleUndo=(id)=>{
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = true;
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  

  render() {
    return (
      <div className="cointainer text-center main d-flex flex-column">
        <h2 className="col-12 title">Stwórz listę zadań</h2>
        <div className="d-flex flex-row col-12">
          <div className="add-task col-4">
            <label>
              Wprowadź zadanie:
              <input
                className="col-10"
                type="text"
                placeholder="Wprowadź zadanie"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Termin wykonania:
              <input
                className="col-10"
                type="date"
                date={this.state.date}
                onChange={this.handleDate}
                min={minDate}
                placeholder={minDate}
              />
            </label>
            <label className="checkbox">
              Priorytet
              <input
                className="col-10"
                type="checkbox"
                checked={this.state.important}
                onChange={this.handleChangeCheckbox}
              />
            </label>
            <button className="col-10" onClick={this.handleAddTask}>
              Potwierdź
            </button>
          </div>
          <div className="col-8">
            <TaskList
              tasks={this.state.tasks}
              handleTaskDone={this.handleTaskDone}
              handleDelete={this.handleDelete}
              handleUndo={this.handleUndo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
