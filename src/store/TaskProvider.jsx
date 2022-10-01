import { useReducer } from "react";
import { TaskContext } from "./context.js";
import taskReducer, { initialState } from "./taskReducer";

export default function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
}
