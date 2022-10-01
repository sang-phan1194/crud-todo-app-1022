import { useContext } from "react";
import { TaskContext } from "../store/context";
import ListItem from "./ListItem";

export default function TodoList() {
  const taskList = useContext(TaskContext)[0].taskList;

  return (
    <ul>
      {[...taskList].map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
