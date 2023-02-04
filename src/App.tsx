import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppSelector } from "./utils/hooks"
import { Container, Flex } from '@chakra-ui/react'
import ThemeToggle from "./components/ThemeToggle"
import TaskItemsContainer from "./components/TaskItemsContainer"

function App() {
  const todos = useAppSelector(state => state.todos)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <Container maxW='xl' h='full' py='5' >
      <Flex direction='column' h='full' w='full'>
        <ThemeToggle />
        <TaskItemsContainer />
        <TaskInput />
      </Flex>
    </Container >
  )
}

export default App