import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  const onCheck =  ()  => {
    toggleComplete(task.id)
  }

  return (
    <div className="todo" >
      <div className="todo-name-container">
        <input type='checkbox' className="todo-checkbox" checked={task.completed} onClick={onCheck}></input>
        <p onClick={onCheck} className={`todo-name${task.completed ? " completed" : ""}`} >{task.task}</p>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
