function TodoRowItem({ todoNum, todoDescription, todoAssigned }) {
  return (
    <tr>
      <th scope="row">{todoNum}</th>
      <td>{todoDescription}</td>
      <td>{todoAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
