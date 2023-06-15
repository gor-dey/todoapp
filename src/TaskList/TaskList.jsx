import { Task } from "./Task/Task";
import styles from "./TaskList.module.css";

import PropTypes from "prop-types";

TaskList.propTypes = {
  dataInTodo: PropTypes.array,
  data: PropTypes.array,
  changeCheckbox: PropTypes.func,
  title: PropTypes.string,
  changeTask: PropTypes.func,
  removeTask: PropTypes.func,
};

function TaskList(props) {
  return (
    <ul className={styles.todoList}>
      {props.dataInTodo.map((i) => {
        return (
          <Task
            changeTask={props.changeTask}
            removeTask={props.removeTask}
            title={i.title}
            completed={i.completed}
            id={i.id}
            key={i.id}
            changeCheckbox={props.changeCheckbox}
            data={props.data}
          />
        );
      })}
    </ul>
  );
}

export { TaskList };
