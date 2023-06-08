import { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = title => {
    setTodos(prev => [
      {
        _id: prev[0] ? prev[0]._id + 1 : 1,
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-3xl bg-gray-800 px-5 py-3 w-full">
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e =>
          e.key === "Enter" &&
          e.target.value.replace(/\s/g, "").length &&
          addTodo(title)
        }
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;
