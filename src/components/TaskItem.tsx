import { Heading, IconButton, Flex } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch } from "../hooks/reduxHooks"
import { checkTask, deleteTask } from "../features/tasks/tasksSlice"

type PropsType = {
  id: string
  title: string
}

const TaskItem = ({ id, title }: PropsType) => {
  const dispatch = useAppDispatch()

  const handleCheck = () => {
    dispatch(checkTask({ id }))
  }

  const handleDelete = () => {
    dispatch(deleteTask({ id }))
  }

  return (
    <Flex direction='row' align='center' gap={3} border='1px' borderRadius="xl" borderColor='gray.600' p={2} my='2'>
      <IconButton onClick={handleCheck} borderRadius="3xl" aria-label="CheckIcon" icon={<CheckIcon />} />
      <Heading fontSize='xl'>{title}</Heading>
      <IconButton onClick={handleDelete} ms='auto' aria-label="DeleteIcon" icon={<DeleteIcon color='red.500' />} />
    </Flex>
  )
}
export default TaskItem