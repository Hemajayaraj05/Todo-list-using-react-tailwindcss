import { useState } from "react";
import AddTask from "../component/AddTask";
import Header from "../component/Header";
import ListTask from "../component/ListTask";

function DashBoard() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  return (
    <>
      <Header />
      <div className="flex">
      <AddTask />

      <div className="flex items-center px-10 mt-4 space-x-6">
        <div className="flex items-center">
          <p className="mr-2 font-semibold">Filter by Status:</p>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded px-3 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All</option>
            <option value="Completed">Completed</option>
            <option value="Yet to Complete">Yet to Complete</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="flex items-center">
          <p className="mr-2 font-semibold">Sort by Priority:</p>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border rounded px-3 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All</option>
            <option value="most">Most</option>
            <option value="average">Average</option>
            <option value="least">Least</option>
          </select>
        </div>
      </div>
      </div>

      <ListTask statusFilter={statusFilter} priorityFilter={priorityFilter} />
    </>
  );
}

export default DashBoard;
