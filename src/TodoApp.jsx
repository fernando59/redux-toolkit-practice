import { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/'
export const TodoApp = () => {
  const [count, setCount] = useState(1)
  const {data:todos=[],isLoading} =useGetTodosQuery()
  const {data:todo=[],isLoading:isLoadingId} =useGetTodoByIdQuery(count)
  return (
  <>
    <h1>Todos -RTK Query</h1>
    <hr />

    {/* <h4>{isLoading?'Cargando':''}</h4>
    <pre>...</pre>
    <ul>
      {
        todos.map(todo=>(
          <li key={todo.id}><strong>{todo.completed?'Done':'Pending'}</strong>{todo.title} </li>
        ))
      }
    </ul> */}


    <pre>{JSON.stringify(todo)}</pre>

    <button onClick={()=>setCount(count-1)}> Prev Todo </button>
    <button onClick={()=>setCount(count+1)}> Next Todo </button>
  </>
  )
}
