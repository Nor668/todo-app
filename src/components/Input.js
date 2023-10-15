import { useState } from "react";

export default function Input({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, completed: false, id: Date.now() };

    onAddTask(newTask);
    setDescription("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}
