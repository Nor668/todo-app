export default function Task({ data, onDeleteTask, onCheck }) {
  return (
    <li className="list-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={data.completed ? true : false}
        // value={data.completed}
        onClick={() => onCheck(data.id)}
      ></input>

      <p className={`text ${data.completed ? "done" : ""}`}>
        {data.description}
      </p>
      <span onClick={() => onDeleteTask(data.id)}>✖</span>
    </li>
  );
}
