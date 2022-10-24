import { useState } from "react"
import { useSelector } from "react-redux"
import "bootstrap-icons/font/bootstrap-icons.css"
import InputForm from "./components/InputForm"
import TodoList from "./components/ToDoList"
import { ThemeChooser } from "./components/ThemeChooser"

function App() {
  const [filterTask, setFilterTask] = useState("all-tasks")
  const [toggleThemeMode, setToggleTheme] = useState(false)
  const handleChange = (e) => {
    setFilterTask(e.target.value)
  }
  const { main_bg_color, text_color } = useSelector((state) => state.theme)

  return (
    <div
      className="app-wrapper"
      style={{ backgroundColor: main_bg_color, color: text_color }}
    >
      {toggleThemeMode && <ThemeChooser />}
      <div className="app-container">
        <h2>To Do List</h2>
        <div className="form-group">
          <InputForm />
        </div>
        <div className="tools-group">
          {/* button to switch to theme choooser */}
          <button
            id="change-theme"
            onClick={() => setToggleTheme(!toggleThemeMode)}
          >
            <i className="bi bi-palette"></i>
          </button>
          {/* group tasks by category */}
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
