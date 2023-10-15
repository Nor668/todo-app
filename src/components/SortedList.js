import Button from "./Button";

export default function SortedList({
  tasks,
  onClearTasks,
  setSortedBy,
  sortedBy,
}) {
  const numCompletedTasks = tasks.filter(
    (task) => task.completed !== true
  ).length;

  function sortTask(action) {
    setSortedBy(action);
  }

  return (
    <div className="sorted-box">
      <em>
        {numCompletedTasks} {numCompletedTasks > 1 ? "items" : "item"} left
      </em>
      <div className="btn-box">
        <Button sortTask={sortTask} sortedBy={sortedBy}>
          All
        </Button>
        <Button sortTask={sortTask} sortedBy={sortedBy}>
          Active
        </Button>
        <Button sortTask={sortTask} sortedBy={sortedBy}>
          Completed
        </Button>
      </div>
      <button className="btn" onClick={onClearTasks}>
        Clear completed
      </button>
    </div>
  );
}
