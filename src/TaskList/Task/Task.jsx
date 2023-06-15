import { useState } from "react";

import styles from "./Task.module.css";

function Task(props) {
  const [checking, setChecking] = useState(props.completed);

  let newData = JSON.parse(JSON.stringify(props));
  function checkComplete() {
    const newChecking = !checking;
    setChecking(newChecking);

    newData.completed = newChecking;
    props.changeCheckbox(newData);
  }

  return (
    <li>
      <div className="view">
        <input
          className={styles.toggle}
          type="checkbox"
          checked={props.completed}
          checked={checking}
          onChange={checkComplete}
        />
        <label>
          <span className={newData.completed ? styles.description : ""}>
            {props.title}
          </span>
          <span className={styles.created}>created 5 min ago</span>
        </label>
        <button
          className={styles.icon + " " + styles.iconEdit}
          onClick={() => {
            props.changeTask(props.title);
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
