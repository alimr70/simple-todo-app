import { Heading, IconButton, Flex } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch } from "../hooks/reduxHooks"
import { checkTask, deleteTask } from "../features/tasks/tasksSlice"

type PropsType = {
  id: string
  title: string
  isDone?: boolean
}

const TaskItem = ({ id, title, isDone }: PropsType) => {
  const dispatch = useAppDispatch()

  const handleCheck = () => {
    dispatch(checkTask({ id }))
  }

  const handleDelete = () => {
    dispatch(deleteTask({ id }))
  }

  return (
    <Flex direction='row' align='center' gap={3} border='1px' borderRadius="xl" borderColor='gray.600' p={2} my='2'>
      <IconButton variant='outline' backgroundColor={isDone ? 'green.500' : 'transparent'} onClick={handleCheck} borderRadius="3xl" aria-label="CheckIcon" icon={<CheckIcon />} />
      <Heading fontSize='xl'>{title}</Heading>
      <IconButton variant='outline' onClick={handleDelete} ms='auto' aria-label="DeleteIcon" icon={<DeleteIcon color='red.500' />} />
    </Flex>
  )
}
export default TaskItem