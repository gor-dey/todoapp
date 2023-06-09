import { useState } from "react";
import { useEffect } from "react";
import { v1 } from "uuid";

import { TaskList } from "./TaskList/TaskList";
import NewTaskForm from "./NewTaskForm/NewTaskForm.jsx";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  console.log("data", data);

  useEffect(() => {
    const raw = localStorage.getItem("data") || localStorage.getItem([]);
    console.log("raw", raw);
    setData(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [filter, setFilter] = useState("all");

  function removeTask(id) {
    let filteredData = data.filter((i) => i.id !== id);
    setData(filteredData);
  }

  function addNewTask(task) {
    let newTask = { id: v1(), title: `${task}`, completed: false };
    let newData = [newTask, ...data];
    setData(newData);
  }

  function changeFilter(value) {
    setFilter(value);
  }

  let dataInTodo = data;
  if (filter == "completed") {
    dataInTodo = data.filter((i) => i.completed == true);
  }
  if (filter == "active") {
    dataInTodo = data.filter((i) => i.completed == false);
  }

  function clearCompleted() {
    let filteredData = data.filter((i) => i.completed !== true);
    setData(filteredData);
  }

  function changeCheckbox(newChecking) {
    let specificData = data.find((i) => i.id === newChecking.id);
    if (specificData) {
      specificData.completed = !specificData.completed;
    }

    setData([...data]);
  }

  function changeTask(editingTask, editingTaskId) {
    data.map((i) => {
      if (i.id == editingTaskId) {
        i.title = editingTask;
      }
    });
    let newData = [...data];
    setData(newData);
  }

  return (
    <section className={styles.todoapp}>
      <Header></Header>
      <section className={styles.main}>
        <NewTaskForm addNewTask={addNewTask} />

        <TaskList
          changeTask={changeTask}
          data={data}
          setData={setData}
          removeTask={removeTask}
          changeCheckbox={changeCheckbox}
          dataInTodo={dataInTodo}
        />

        <Footer
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
          filter={filter}
          data={data}
        />
      </section>
    </section>
  );
}

export { App };
