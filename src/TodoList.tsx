import React from 'react'
import Todo from './Todo'

const TodoList = (props: {tasks: String[]}) => {
  return (
    <>    
    <Todo tasks={props.tasks}/>
    <input type='text' />
    <button>タスク追加</button>
    <button>タスクを削除</button>
    </>
    
  )
}

export default TodoList