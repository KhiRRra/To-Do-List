import React from "react";
import Task from "./Task.js";
import "../style/TaskList.css"
import 'bootstrap/dist/css/bootstrap.min.css';


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
      undo={props.handleUndo}
    />
  ));

  return (
    <div className="task-list">
      <div className="task-list--active col-6">
        <h2 className="col-11 text-center">Zadania do wykonania ({activeTask.length}):</h2>
        {activeTask}
      </div>
      <div className="task-list--done col-6">
        <h2 className="col-11 text-center">Zadania wykonane ({doneTask.length}):</h2>
        {doneTask}
      </div>
    </div>
  );
};

export default TaskList;
