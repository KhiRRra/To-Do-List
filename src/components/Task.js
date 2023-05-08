import React from "react";
import "../style/Task.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = (props) => {
  const { task } = props;

  // const time = new Date(task.finishDate).toLocaleString();
  const day = new Date(task.finishDate).getUTCDate();
  const month = new Date(task.finishDate).getUTCMonth() + 1;
  const year = new Date(task.finishDate).getUTCFullYear()


  return (
    <>
      {task.active ? (
        <div key={task.id} className="task active col-11">
          <p>
            Zadanie: <span>{task.text}</span>
          </p>
          <p>
            Wykonać zadanie do: <span>{task.date}</span>
          </p>
          <p>
            Priorytet: <span>{task.important ? "Tak" : "Nie"}</span>
          </p>
          <p>
            Zadanie wykonane?{" "}
            <input
              type="checkbox"
              check={!task.active}
              onChange={() => props.done(task.id)}
            />
          </p>
          <div className="col-12">
            <button className="col-4" onClick={() => props.delete(task.id)}>
              USUŃ
            </button>
          </div>
        </div>
      ) : (
        <div key={-task.id} className="task done col-11">
          <p>
            Zadanie: <span>{task.text}</span>
          </p>
          <span>Data wykonania zadania: {year}-{month<10?"0"+month:month}-
          {day<10?"0"+day:day}</span>
          <div className="col-12">
            <button className="col-4" onClick={() => props.delete(task.id)}>
              USUŃ
            </button>
            <button className="col-4" onClick={() => props.undo(task.id)}>
              COFNIJ
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
