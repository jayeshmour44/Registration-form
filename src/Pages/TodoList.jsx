import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(15); // dropdown for entries

  const todoData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resData = await res.json();
      console.log("Res Data: ", resData);
      setTodos(resData.slice(0, 200)); // 200 todos
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  };

  useEffect(() => {
    todoData();
  }, []);

  // Filter logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed === true;
    if (filter === "incomplete") return todo.completed === false;
    return true;
  });

  // Pagination logic
  const indexOfLastTodo = currentPage * entriesPerPage;
  const indexOfFirstTodo = indexOfLastTodo - entriesPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(filteredTodos.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // reset to first page
  };

  return (
    <div className="todo-container">
      <h2 className="todo-heading">Todo List</h2>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="filter" className="filter-label">
          Filter Todos:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="all">All</option>
          <option value="completed">Completed (True)</option>
          <option value="incomplete">Not Completed (False)</option>
        </select>

        {/* Entries Dropdown */}
        <label htmlFor="entries" className="entries-label">
          Show Entries:
        </label>
        <select
          id="entries"
          value={entriesPerPage}
          onChange={handleEntriesChange}
          className="entries-dropdown"
        >
          <option value="0">Entries</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* Todo Table */}
      <table className="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td className={todo.completed ? "completed" : "incomplete"}>
                {todo.completed ? "True" : "False"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button>
          Page {currentPage} of {totalPages}
        </button>
        {/* {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))} */}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;
