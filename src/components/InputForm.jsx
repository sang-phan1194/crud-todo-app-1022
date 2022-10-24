import { useContext } from "react"
import { useSelector } from "react-redux"
import { TaskContext } from "../store/context"
import { set_task, add_task } from "../store/taskReducer"

export default function InputForm() {
  const [state, dispatch] = useContext(TaskContext)
  const { task } = state
  const add_btn_color = useSelector((state) => state.theme.add_btn_color)
  const handleTyping = (e) => {
    dispatch(set_task(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(add_task(task))
    dispatch(set_task(""))
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        onInput={handleTyping}
        value={task.content}
        maxLength={120}
        required
        autoFocus
      />
      <button type="submit" style={{ backgroundColor: add_btn_color }}>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  )
}
