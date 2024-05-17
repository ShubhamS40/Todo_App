import { createContext,useContext } from "react";

const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"todo masg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    editTodo:(id,todo)=>{},
    toggleTodo:(id)=>{}
})

export  const TodoProvider=Todocontext.Provider;
export const useTodo=()=>{
 return useContext(Todocontext)

} 