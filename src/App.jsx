import "bootstrap-icons/font/bootstrap-icons.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/ToDoList";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h2>To Do List</h2>
        <InputForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
