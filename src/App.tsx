import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./utils/hooks"

function App() {
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(todos)
  }, [])
  return (
    <div className="App">

    </div>
  )
}

export default App
