import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Task.module.css";

Task.propTypes = {
  completed: PropTypes.bool,
  changeCheckbox: PropTypes.func,
  title: PropTypes.string,
  changeTask: PropTypes.func,
  removeTask: PropTypes.func,
  id: PropTypes.string,
};

function Task(props) {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMinutes(minutes + 1);
    }, 1500);
  });

  // localStorage.props.data.minutes
  //   ? localStorage.props.data.minutes
  //   : (localStorage.props.data.minutes = minutes);
    // props.data.minutes = minutes
    // console.log('localStorage', localStorage)

  const [checking, setChecking] = useState(props.completed);

  const [editingTask, setEditingTask] = useState(false);

  let newData = JSON.parse(JSON.stringify(props));
  function checkComplete() {
    const newChecking = !checking;
    setChecking(newChecking);

    newData.completed = newChecking;
    props.changeCheckbox(newData);
  }

  const [task, setTask] = useState("");
  function logTask() {
    if (event.key === "Enter" && task.trim() != "") {
      props.changeTask(task.trim(), props.id);
      setTask("");
      setEditingTask(!editingTask);
    } else return;
  }

  return (
    <li>
      <div className="view">
        <input
          className={styles.toggle}
          type="checkbox"
          checked={checking}
          onChange={checkComplete}
        />
        <label>
          <span className={newData.completed ? styles.description : ""}>
            {editingTask && !props.completed ? (
              <input
                autoFocus
                placeholder="Take new task"
                value={task}
                type="text"
                onChange={(event) => setTask(event.target.value)}
                onKeyDown={logTask}
              />
            ) : (
              props.title
            )}
          </span>
          <span className={styles.created}>created {minutes} min ago</span>
        </label>
        <button
          className={styles.icon + " " + styles.iconEdit}
          onClick={() => {
            setEditingTask(!editingTask);
          }}
        ></button>
        <button
          className={styles.icon + " " + styles.iconDestroy}
          onClick={() => {
            props.removeTask(props.id);
          }}
        ></button>
      </div>
    </li>
  );
}

export { Task };
