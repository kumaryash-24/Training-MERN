import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);  
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-body", !darkMode);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editId) {
        const updatedList = taskList.map((t) =>
          t.id === editId ? { ...t, name: task } : t
        );
        setTaskList(updatedList);
        setEditId(null);
      } else {
        const newTask = {
          id: Date.now(),
          name: task,
          done: false,
        };
        setTaskList([...taskList, newTask]);
      }
      setTask("");
    }
  };

  const toggleTask = (id) => {
    const updatedList = taskList.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTaskList(updatedList);
  };

  const deleteTask = (id) => {
    const filtered = taskList.filter((t) => t.id !== id);
    setTaskList(filtered);
  };

  const editTask = (id) => {
    const taskToEdit = taskList.find((t) => t.id === id);
    setTask(taskToEdit.name);
    setEditId(id);
  };

  const clearCompletedTasks = () => {
    const activeTasks = taskList.filter((t) => !t.done);
    setTaskList(activeTasks);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <h1>📋 My Cool To-Do List 📝</h1>

      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🌞🔮 Light Mode" : "🌙🪄 Dark Mode"}
      </button>

      <div className="input-section">
        <input
          type="text"
          placeholder="✍️ Add or edit a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        />
        <button onClick={handleAddTask}>
          {editId ? "✏️ Update" : "➕ Add"}
        </button>
        <button onClick={clearCompletedTasks}>🧹 Clear Completed</button>
      </div>

      <ul className="task-list">
        {taskList.length > 0 ? (
          taskList.map((t) => (
            <li key={t.id} className={t.done ? "done" : ""}>
              <span onClick={() => toggleTask(t.id)}>
                {t.done ? "✅" : "🕒"} {t.name}
              </span>
              <div className="action-buttons">
                <button onClick={() => editTask(t.id)}>✏️ Edit</button>
                <button onClick={() => deleteTask(t.id)}>🗑️ Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p className="no-task">😴 No tasks yet. Add one above!</p>
        )}
      </ul>
    </div>
  );
}

export default App;
