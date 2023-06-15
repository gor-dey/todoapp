import styles from "./TasksFilter.module.css";

function TasksFilter(props) {
  return (
    <ul className={styles.filters}>
      <li>
        <button
          className={props.filter == "all" ? styles.selected : ""}
          onClick={() => {
            return props.changeFilter("all");
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={props.filter == "active" ? styles.selected : ""}
          onClick={() => props.changeFilter("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={props.filter == "completed" ? styles.selected : ""}
          onClick={() => props.changeFilter("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
