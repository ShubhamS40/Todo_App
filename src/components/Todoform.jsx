import React, { useState } from 'react'
import { useTodo } from '../context/Todocontext'
import { nanoid } from 'nanoid'
function Todoform() {
   const [todo,setTodo]=useState("")
  const {addTodo}=useTodo()
  const handleAdd=(e)=>{
    e.preventDefault()
    if (!todo) return

    addTodo({id:nanoid(),todo:todo,completed:false})
    setTodo("")


  }
  
  return (
    <div className='  dark:bg-purple-400   p-5 mx-[10%] h-auto rounded-xl'>
      <div className='flex justify-center mt-[5%] gap-5'>
      {/* input and button tag */}
        <input onChange={
          (e)=>{setTodo(e.target.value)
        }}  value={todo}   className='p-2 rounded-xl w-[40vw] ' type="text" />
        <button
        onClick={handleAdd}
        className='text-white bg-blue-600 px-5 pb-2 pt-2 rounded-xl'>Add</button>
      </div>

    
    </div>
  )
}

export default Todoform
// input and button tag
