import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppDispatch, useAppSelector } from "./utils/hooks"

function App() {
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(todos)
  }, [])

  return (
    <div className="App">
      <TaskInput />
    </div>
  )
}

export default App