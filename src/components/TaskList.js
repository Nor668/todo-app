import Task from "./Task";

export default function TaskList({ tasks, onDeleteTask, onCheck, sortedBy }) {
  let sorted;

  if (sortedBy === "All")
    sorted = tasks.slice().sort((a, b) => +a.completed - +b.completed);
  if (sortedBy === "Active") sorted = tasks.filter((task) => !task.completed);
  if (sortedBy === "Completed") sorted = tasks.filter((task) => task.completed);

  return (
    <ul>
      {sorted.map((task, i) => (
        <Task
          data={task}
          onDeleteTask={onDeleteTask}
          onCheck={onCheck}
          key={i}
        />
      ))}
    </ul>
  );
}
