import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppDispatch, useAppSelector } from "./utils/hooks"
import { AspectRatio } from '@chakra-ui/react'
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(todos)
  }, [])

  return (
    <>
      <ThemeToggle />
      <TaskInput />
    </>
  )
}

export default App