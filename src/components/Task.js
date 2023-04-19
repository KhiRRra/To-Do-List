import React from "react";

const Task = (props) => {
  const { task } = props;

  const time = new Date(task.finishDate).toLocaleString();

  return (
    <>
      {task.active ? (
        <div key={task.id} className="task active">
          <p>Zadanie: {task.text}</p>
          <span>Wykonać zadanie do: {task.date}</span>
          <br />
          <span>Priorytet: {task.important ? "Tak" : "Nie"}</span>
          <p>
            Zadanie wykonane?{" "}
            <input
              type="checkbox"
              check={!task.active}
              onChange={() => props.done(task.id)}
            />
          </p>
        </div>
      ) : (
        <div key={-task.id} className="task done">
          <p>Zadanie: {task.text}</p>
          <span>Data wykonania zadania: {time}</span>
        </div>
      )}
    </>
  );
};

export default Task;
