import TasksFilter from "../TasksFilter/TasksFilter";

import styles from './Footer.module.css'

function Footer(props) {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.todoCount}>1 items left</span>

        <TasksFilter changeFilter={props.changeFilter} filter={props.filter} />

        <button className={styles.clearCompleted}
          onClick={()=> props.clearCompleted()}
        >Clear completed</button>
      </div>
    </>
  );
}

export default Footer;
