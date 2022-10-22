import { useContext } from "react"
import { TaskContext } from "../store/context"
import ListItem from "./ListItem"

export default function TodoList({ filterType }) {
  const taskList = useContext(TaskContext)[0].taskList

  return (
    <>
      <ul>
        {filterType === "all-tasks" &&
          [...taskList].map((task) => <ListItem key={task.id} task={task} />)}
        {filterType === "active-tasks" &&
          [...taskList]
            .filter((item) => item.done === false)
            .map((task) => <ListItem key={task.id} task={task} />)}
        {filterType === "completed-tasks" &&
          [...taskList]
            .filter((item) => item.done === true)
            .map((task) => <ListItem key={task.id} task={task} />)}
      </ul>
    </>
  )
}
