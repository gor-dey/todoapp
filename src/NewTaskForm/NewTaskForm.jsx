import { useState } from "react";

import styles from './NewTaskForm.module.css'

function NewTaskForm(props) {
  const [task, setTask] = useState("");

  function logTask() {
    if (event.key === "Enter" && task.trim() != "") {
      props.addNewTask(task.trim());
      setTask("");
    } else return;
  }

  return (
    <>
      <input
        type="text"
        className={styles.newTodo}
        placeholder="What needs to be done?"
        autoFocus
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={logTask}
      />
    </>
  );
}

export default NewTaskForm;
