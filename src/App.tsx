import { useEffect } from "react"
import TaskInput from "./components/TaskInput"
import { useAppSelector } from "./hooks/reduxHooks"
import { Container, Flex } from '@chakra-ui/react'
import TaskItemsContainer from "./components/TaskItemsContainer"
import Header from "./components/Header"

function App() {
  const tasks = useAppSelector(state => state.tasks)

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <Container maxW='xl' h='100dvh' py='5' >
      <Flex direction='column' h='full' w='full'>
        <Header />
        <TaskItemsContainer />
        <TaskInput />
      </Flex>
    </Container >
  )
}

export default App