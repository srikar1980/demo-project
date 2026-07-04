import { useTodo } from "../hooks/useToDo";
import { getTodayDate, sayHello } from "../utils/helpers";

const Home = () => {
  const todayDate = getTodayDate();

  const {
    todos,
    formData,
    editId,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  } = useTodo();

  return (
    <div className="home-page">
      <div className="welcome-wrapper">
        <span>{sayHello("React")}</span>
        <span>{todayDate}</span>
      </div>

      <h1>Todo App</h1>

      <div className="form-controls">
        <input
          name="todoTask"
          placeholder="Task Name"
          value={formData.todoTask}
          onChange={handleChange}
        />

        <input
          name="timeToComplete"
          placeholder="Hours"
          value={formData.timeToComplete}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="isPending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button onClick={handleSubmit}>{editId ? "Update" : "Add"}</button>

        {editId && <button onClick={handleCancel}>Cancel</button>}
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todoTask}</td>
              <td>{todo.timeToComplete}</td>
              <td>{todo.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(todo)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
