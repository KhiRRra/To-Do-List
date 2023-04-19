import React, { Component } from "react";
import TaskList from "./TaskList";

class AddTask extends Component {
  state = {
    value: "",
    important: false,
    date: new Date().toISOString().slice(0, 10),

    tasks: [
      {
        id: 1,
        text: "zrobić zakupy",
        date: "14-04-2023",
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

  render() {
    return (
      <div>
        <h1>Stwórz listę zadań!</h1>
        <label>Wprowadź zadanie </label>
        <input
          type="text"
          placeholder="zadanie"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Termin wykonania: </label>
        <input
          type="date"
          date={this.state.date}
          onChange={this.handleDate}
        ></input>
        <input
          type="checkbox"
          checked={this.state.important}
          onChange={this.handleChangeCheckbox}
        ></input>

        <button onClick={this.handleAddTask}>Potwierdź</button>

        <TaskList
          tasks={this.state.tasks}
          handleTaskDone={this.handleTaskDone}
        />
      </div>
    );
  }
}

export default AddTask;
