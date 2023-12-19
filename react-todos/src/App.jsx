import TodoRowItem from "./components/TodoRowItem";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <TodoRowItem
                todoNum="1"
                todoDescription="Feed dog"
                todoAssigned="Eric"
              />
              <TodoRowItem
                todoNum="2"
                todoDescription="Get haircut"
                todoAssigned="Eric"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
