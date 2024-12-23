import { useEffect, useState } from 'react'
import classes from './style.module.css'
import TodoItem from './components/todo-items'

function App() {

  const [Loading, setLoading] = useState(false)
  const [TodoList, setTodoList] = useState([])
  const [Error, setError] = useState(null)

  async function fetchTodos (){
    try{
      setLoading(true)

      const ApiResponce = await fetch('https://dummyjson.com/todos');
      const result = await ApiResponce.json();

      console.log(result?.todos);
      if(result?.todos && result?.todos.length > 0){
        setTodoList(result?.todos)
        setLoading(false)
        setError('')
      }else{
        setTodoList([])
        setLoading(false)
        setError('')
      }
      

    }catch(e){
      setError("Error")
    }
  }

  useEffect(()=>{
    fetchTodos()
  }, [])



  return (
    <div className={classes.wrapperClass}>
      <h1 className={classes.headderTitle}>Simple Todo-List project</h1>
      <div>
        {
          TodoList && TodoList.length > 0
          ? TodoList.map((todoItem)=> <TodoItem/>)
          : null
        }
      </div>
    </div>
  )
}

export default App
