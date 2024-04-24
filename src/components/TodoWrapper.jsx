import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuidv4(), task: todo, completed: true, isEditing: false }])
    console.log(todos)
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo ))
    console.log("toggled!")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    console.log("deleted!")
  }

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
