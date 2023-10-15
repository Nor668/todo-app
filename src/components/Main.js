import TaskList from "./TaskList";

export default function Main({ tasks, onDeleteTask, onCheck, sortedBy }) {
  return (
    <div className="main">
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onCheck={onCheck}
        sortedBy={sortedBy}
      />
    </div>
  );
}
