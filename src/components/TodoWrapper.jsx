import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  const previousTodos = window.localStorage.getItem("todos");
  const [todos, setTodos] = useState(JSON.parse(previousTodos) ||  [])

  const addTodo = (todo) =>{
    if(todo) {
      setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => (todo.id === id) ? {...todo, isEditing: !todo.isEditing}  : todo))
    console.log("edit")
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  useEffect(() => {
    if(todos) {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos])

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      <div className="todo-list">
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm
            key={index}
            editTodo={editTask}
            task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
      </div>
    </div>
  )
}
