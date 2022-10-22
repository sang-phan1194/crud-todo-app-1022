import { useContext, useState } from "react"
import { TaskContext } from "../store/context"
import { add_edited_task } from "../store/taskReducer"

export default function EditForm({ task, toggleEditingMode }) {
  const dispatch = useContext(TaskContext)[1]
  const [editedTask, setEditedTask] = useState(task.content)

  const handleTyping = (e) => {
    setEditedTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(add_edited_task([task.id, editedTask]))
    toggleEditingMode()
  }

  return (
    <form onSubmit={handleSubmit} className="input-form edit-form">
      <input
        type="text"
        onInput={handleTyping}
        value={editedTask}
        maxLength={120}
        required
        autoFocus
      />
      <div className="btn-group">
        <button type="submit">
          <i className="bi bi-check-lg"></i>
        </button>
        <button
          className="cancel-btn"
          onClick={(e) => {
            e.preventDefault()
            toggleEditingMode()
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </form>
  )
}
