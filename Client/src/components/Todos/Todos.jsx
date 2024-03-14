import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
const Todos = () => {
    // const [todos,setTodos] = useState([])


    const {isLoading, error, data: todos} = useQuery({
        queryKey: 'todos',
        queryFn: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            return await response.json();
        }  
    })

    if(isLoading){
        return <p>...loading</p>
    }
    
    if(error){
        return <p>something went wrong</p>
    }

    //   const fetchTodos = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const data = await response.json();
    //     setTodos(data)
    //   }
    
  return (
    <div>
        {todos.map((todo,index) => <p>{index+1}:{todo.title}</p>)}
    </div>
  )
}

export default Todos