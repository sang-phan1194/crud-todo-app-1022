import saveToLocalStorage, { savedTaskList } from "./workWithLocalStorage"

// Initial state:
const initialState = {
  task: {
    id: Date.now(),
    content: "",
    done: false,
  },
  taskList: JSON.parse(savedTaskList),
}

// Action types:
const SET_TASK = "set_task"
const ADD_TASK = "add_task"
const DELETE_TASK = "delete_task"
const ADD_EDITED_TASK = "add_edited_task"
const SET_DONE = "set_done"

// Action creators:
const set_task = (payload) => ({ type: SET_TASK, payload })
const add_task = (payload) => ({ type: ADD_TASK, payload })
const delete_task = (payload) => ({ type: DELETE_TASK, payload })
const set_done = (payload) => ({ type: SET_DONE, payload })
const add_edited_task = (payload) => ({ type: ADD_EDITED_TASK, payload })

// reducer:
const taskReducer = (state, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          id: Date.now(),
          content: action.payload,
        },
      }
    case ADD_TASK:
      const addedTaskList = [...state.taskList, action.payload]
      saveToLocalStorage(addedTaskList)
      return {
        ...state,
        taskList: [...addedTaskList],
      }
    case DELETE_TASK:
      const deletedTaskList = [...state.taskList].filter(
        (item) => item.id !== action.payload
      )
      saveToLocalStorage(deletedTaskList)
      return {
        ...state,
        taskList: [...deletedTaskList],
      }
    case SET_DONE:
      const setDoneTaskList = [...state.taskList].map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : { ...item }
      )
      saveToLocalStorage(setDoneTaskList)
      return {
        ...state,
        taskList: [...setDoneTaskList],
      }
    case ADD_EDITED_TASK:
      const editedTaskList = [...state.taskList].map((item) =>
        item.id === action.payload[0]
          ? { ...item, content: action.payload[1], id: Date.now() }
          : { ...item }
      )
      saveToLocalStorage(editedTaskList)
      return {
        ...state,
        taskList: [...editedTaskList],
      }
    default:
      throw new Error("Somthing went wrong!")
  }
}

export {
  initialState,
  set_task,
  add_task,
  delete_task,
  set_done,
  add_edited_task,
}
export default taskReducer
