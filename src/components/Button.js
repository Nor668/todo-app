export default function Button({ sortedBy, sortTask, children }) {
  return (
    <button
      className={`btn ${sortedBy === children ? "active" : ""}`}
      onClick={() => sortTask(children)}
    >
      {children}
    </button>
  );
}
