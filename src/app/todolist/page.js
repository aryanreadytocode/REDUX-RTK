"use client";
import { addTodos } from "@/redux/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const dataValue = useSelector((data) => data.todoData.todos)

  console.log(dataValue)
  return (
    <div>
      <h3>Add todo</h3>
      <input
        type="text"
        placeholder="add new task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch(addTodos(todo))}>Add todo</button>

      <h3>Todo List</h3>
      {
        
        dataValue.map((item) => {
            return <div>{item.name}</div>
        })
      }
    </div>
  );
}
