import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ListTask() {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  // Load tasks whenever you visit/revisit this page
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, [location]);

  // Delete task
  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // Toggle complete/incomplete
  const handleToggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "completed" ? "auto" : "completed",
          }
        : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // Decide status based on date/time + completion
  const getStatus = (task) => {
    if (task.status === "completed") return "Completed";

    const now = new Date();
    const taskDateTime = new Date(`${task.date}T${task.time}`);

    if (now < taskDateTime) return "Yet to Complete";
    if (now >= taskDateTime) return "Pending";
    return "Pending";
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-3xl space-y-6">
        {tasks.length === 0 && <p>No tasks available.</p>}
        {tasks.map((task) => {
          const status = getStatus(task);

          return (
            <div
              key={task.id}
              className="p-6 bg-white rounded-2xl shadow-2xl border relative flex items-start"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="w-5 h-5 mt-2 mr-6"
                checked={status === "Completed"}
                onChange={() => handleToggleComplete(task.id)}
              />

              {/* Task details */}
              <div className="flex-1">
                <p className="font-bold text-xl">{task.title}</p>
                <p className="text-gray-500">{task.Description}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {task.date} {task.time} | {task.priority}
                </p>
              </div>

              {/* Status + Actions */}
              <div className="absolute top-4 right-4 flex items-center space-x-3">
                {status === "Completed" && (
                  <span className="px-2 py-1 text-sm rounded bg-green-100 text-green-600 font-semibold">
                    Completed
                  </span>
                )}
                {status === "Yet to Complete" && (
                  <span className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-600 font-semibold">
                    Yet to Complete
                  </span>
                )}
                {status === "Pending" && (
                  <span className="px-2 py-1 text-sm rounded bg-red-100 text-red-600 font-semibold">
                    Pending
                  </span>
                )}
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit size={20} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(task.id)}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
