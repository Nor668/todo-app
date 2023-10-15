import { useState } from "react";
import Logo from "./Logo";
import Input from "./Input";
import SortedList from "./SortedList";
import Main from "./Main";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [sortedBy, setSortedBy] = useState("All");

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCheck(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : { ...task }
      )
    );
  }

  function handleClearTasks() {
    setTasks(tasks.filter((task) => (task.completed ? "" : task)));
  }

  return (
    <div className="App">
      <Logo />
      <Input onAddTask={handleAddTask} />

      {tasks.length > 0 && (
        <SortedList
          tasks={tasks}
          onClearTasks={handleClearTasks}
          setSortedBy={setSortedBy}
          sortedBy={sortedBy}
        />
      )}
      <Main
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCheck={handleCheck}
        sortedBy={sortedBy}
      />
    </div>
  );
}
