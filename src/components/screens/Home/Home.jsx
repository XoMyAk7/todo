import { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
  {
    _id: 3,
    title: "Vsem q",
    isCompleted: false,
  },
  {
    _id: 2,
    title: "Breakfast",
    isCompleted: false,
  },
  {
    _id: 1,
    title: "Create todos",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = new useState(data);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id !== id));
  };

  return (
    <div className="mx-auto text-white w-4/12">
      <h1 className="text-2xl font-bold text-center mb-10">Todo for junior</h1>
      <CreateTodoField setTodos={setTodos} />
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
