import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "../src/assets/global/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <section className="todoapp">
//       <Header />
//       <section className="main">
//         {/* <NewTaskForm /> */}
//         <TaskList />
//       </section>
//     </section>
//   </React.StrictMode>
// );
