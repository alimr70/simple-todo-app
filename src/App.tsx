import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppSelector } from "./utils/hooks"
import { Container } from '@chakra-ui/react'
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const todos = useAppSelector(state => state.todos)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <Container maxW='xl' >
      <ThemeToggle />
      <TaskInput />
    </Container >
  )
}

export default App