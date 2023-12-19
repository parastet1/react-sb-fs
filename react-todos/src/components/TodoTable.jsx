import TodoRowItem from "./TodoRowItem";

function TodoTable({ todos }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Desciption</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {todos && todos.map((todo) => <TodoRowItem {...todo} />)}
      </tbody>
    </table>
  );
}
export default TodoTable;
