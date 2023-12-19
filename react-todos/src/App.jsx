import { useState } from "react";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

const initData = [
  { todoNum: 1, todoDescription: "Feed puppy", todoAssigned: "User One" },
  { todoNum: 2, todoDescription: "Water plants", todoAssigned: "User Two" },
];

function App() {
  const [todos, setTodos] = useState(initData);
  const [enableAddNew, setEnableAddNew] = useState(false);

  const addTodoHandler = function (description, assigned) {
    const newTodo = {
      todoNum: todos.length + 1,
      todoDescription: description,
      todoAssigned: assigned,
    };

    setTodos([...todos, newTodo]);
  };

  const cancelTodoHandler = () => {
    setEnableAddNew(false);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          {!enableAddNew && (
            <button
              className="btn btn-primary"
              onClick={() => {
                setEnableAddNew(true);
              }}
            >
              Add new todo
            </button>
          )}
          {enableAddNew && (
            <NewTodoForm
              addTodoHandler={addTodoHandler}
              cancelTodoHandler={cancelTodoHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
