import React from "react";
import Task from "./Task.js";

const TaskList = (props) => {
  const { tasks } = props;

  const active = tasks.filter((task) => task.active === true);
  const done = tasks.filter((task) => !task.active);

  const activeTask = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.handleDelete}
      done={props.handleTaskDone}
    />
  ));

  const doneTask = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.handleDelete}
      done={props.handleTaskDone}
    />
  ));

  return (
    <div className="task list">
      <h2>Zadania do wykonania {activeTask.length}:</h2>
      {activeTask}

      <h2>Zadania wykonane {doneTask.length}:</h2>
      {doneTask}
    </div>
  );
};

export default TaskList;
