import React from "react";
import ReactDOM from "react-dom/client";
import TaskProvider from "../src/store/TaskProvider";
import App from "./App";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
