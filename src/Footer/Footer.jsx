import PropTypes from "prop-types";

import TasksFilter from "../TasksFilter/TasksFilter";

import styles from "./Footer.module.css";

Footer.propTypes = {
  data: PropTypes.array,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
  filter: PropTypes.string,
};

function Footer(props) {
  let itemLeft = props.data.filter((i) => !i.completed);

  return (
    <>
      <div className={styles.footer}>
        <span className={styles.todoCount}>{itemLeft.length} items left</span>

        <TasksFilter changeFilter={props.changeFilter} filter={props.filter} />

        <button
          className={styles.clearCompleted}
          onClick={() => props.clearCompleted()}
        >
          Clear completed
        </button>
      </div>
    </>
  );
}

export default Footer;
