import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppSelector } from "./utils/hooks"
import { Container, Divider } from '@chakra-ui/react'
import ThemeToggle from "./components/ThemeToggle"
import TaskItem from "./components/TaskItem"

function App() {
  const todos = useAppSelector(state => state.todos)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <Container maxW='xl' >
      <ThemeToggle />
      <Divider orientation='horizontal' my={3} />
      <TaskItem title="Task Item Test 1" />
      <TaskItem title="Task Item Test 2" />
      <Divider orientation='horizontal' my={3} />
      <TaskInput />
    </Container >
  )
}

export default App