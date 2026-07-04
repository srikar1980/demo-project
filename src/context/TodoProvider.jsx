import { useState } from "react";
import { TodoContext } from "./TodoContext";

const initialState = [
  {
    id: 1,
    todoTask: "Learn HTML",
    timeToComplete: "10",
    status: "isPending",
  },
  {
    id: 2,
    todoTask: "Learn CSS",
    timeToComplete: "15",
    status: "inProgress",
  },
  {
    id: 3,
    todoTask: "Learn Javascript",
    timeToComplete: "30",
    status: "Completed",
  },
];

const initialFormData = {
  todoTask: "",
  timeToComplete: "",
  status: "isPending",
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialState);
  const [formData, setFormData] = useState(initialFormData);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId
            ? {
                ...todo,
                ...formData,
              }
            : todo,
        ),
      );

      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        ...formData,
      };

      setTodos((prev) => [...prev, newTodo]);
    }

    setFormData(initialFormData);
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);

    setFormData({
      todoTask: todo.todoTask,
      timeToComplete: todo.timeToComplete,
      status: todo.status,
    });
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCancel = () => {
    setEditId(null);
    setFormData(initialFormData);
  };

  const value = {
    todos,
    formData,
    editId,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
  };

  return (
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
};