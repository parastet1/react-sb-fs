import { useState } from "react";

function NewTodoForm({ addTodoHandler, cancelTodoHandler }) {
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (assigned !== "" && description !== "") {
      addTodoHandler(description, assigned);
    }
    setAssigned("");
    setDescription("");
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    cancelTodoHandler();
  };

  return (
    <form action="" className="bg-light p-3 border rounded">
      <div className="mb-3">
        <label htmlFor="todoAssigned" className="form-label">
          Assigned
        </label>
        <input
          type="text"
          className="form-control"
          id="todoAssigned"
          onChange={(e) => setAssigned(e.target.value)}
          value={assigned}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoDescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="todoDescription"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={submitHandler}>
        Add Todo
      </button>
      <button className="btn btn-danger ms-3" onClick={cancelHandler}>
        Cancel
      </button>
    </form>
  );
}

export default NewTodoForm;
