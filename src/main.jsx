import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./redux/store"
import TaskProvider from "../src/store/TaskProvider"
import App from "./App"
import "./style.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TaskProvider>
  </React.StrictMode>
)
