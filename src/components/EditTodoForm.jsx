import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("")

    const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={value} type="text" className="todo-input" placeholder='Update task' onChange={handleChange} />
      <button type='submit' className="todo-btn">Update Task</button>
    </form>
  )
}
