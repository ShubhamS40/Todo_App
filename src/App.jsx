import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Todoform from './components/Todoform'
// import Todoitem from './components/TodoItem'
import { TodoProvider } from './context/Todocontext'
import { nanoid } from 'nanoid'



function App() {
  
  const [isTodoEditable,setTodoEditable]=useState(false)
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
       setTodos((prev)=>[{ id:nanoid(),...todo
       },...prev])
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const ok=todos.map((e)=>e);
  console.log(ok.todo);
  const deleteTodo=(id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo=(id)=>{
     setTodos((prev)=>(prev.map((todo)=>todo.id===id?{ ...todo, 
      completed: !todo.completed } : todo)))
      
    }
  
    
 
 

return (
<TodoProvider value={{addTodo,todos,deleteTodo,toggleTodo}}>
<Navbar/>
<Todoform/>

{todos.map((tod)=>{
 return <div key={tod.id}
  className='w-full'
  >

    <div className='mt-1' >
           <div   className=' flex  rounded-xl justify-center gap-5   '>
         <input   className="cursor-pointer" checked={tod.completed}  onChange={()=>{
          toggleTodo(tod.id)
         }} type="checkbox" />
        <input id='hello'  className={` ${tod.completed?"line-through":""}`}   type="text"   value={tod.todo} />
       <button  
      
       className='text-white bg-blue-600 px-5 pb-2 pt-2 rounded-xl'>Edit</button>
         <button  onClick={()=>{
          deleteTodo(tod.id)
         }}  className='text-white bg-blue-600 px-5 pb-2 pt-2 rounded-xl'>Delete</button>
       </div>
      </div>
  </div>
 
})}
</TodoProvider>
  )
}

export default App
