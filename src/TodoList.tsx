import React from 'react'
import Todo from './Todo'

const TodoList = (props: {tasks: string}) => {

  return (
    <>    
    {/* <Todo /> */}
    {props.tasks}    
    </>
    
  )
}

export default TodoList