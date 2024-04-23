import React, { useState } from 'react'

export const TodoForm = () => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder='What is the task today?' onChange={handleChange} />
      <button type='submit' className="todo-btn">Add Task</button>
    </form>
  )
}
