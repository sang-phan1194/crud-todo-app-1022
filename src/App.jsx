import { useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import InputForm from "./components/InputForm"
import TodoList from "./components/ToDoList"

function App() {
  const [filterTask, setFilterTask] = useState("all-tasks")
  const handleChange = (e) => {
    setFilterTask(e.target.value)
  }
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h2>To Do List</h2>
        <div className="form-group">
          <InputForm />
          <select name="filter-tool" id="filter-tool" onChange={handleChange}>
            <option value="all-tasks" defaultValue>
              All Tasks
            </option>
            <option value="active-tasks">Active Tasks</option>
            <option value="completed-tasks">Completed Tasks</option>
          </select>
        </div>
        <TodoList filterType={filterTask} />
      </div>
    </div>
  )
}

export default App
