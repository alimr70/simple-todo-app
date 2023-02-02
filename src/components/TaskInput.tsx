import { KeyboardEvent, useCallback, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../utils/hooks'
import { addTodo } from '../features/todos/todosSlice'
import { HStack, Box, Input, Button } from '@chakra-ui/react'

const TaskInput = () => {
  const taskInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleSubmit = useCallback(() => {
    if (!taskInputRef.current || taskInputRef?.current?.value === '') return

    dispatch(addTodo({
      id: uuidv4(),
      value: taskInputRef.current.value,
      isDone: false,
      isDeleted: false
    }))

    taskInputRef.current.value = ''
  }, [])

  const handleEnterKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }, [])

  return (
    <Box>
      <HStack>
        <Input ref={taskInputRef} variant='outline' placeholder='Add a task!' size='lg' onKeyDown={handleEnterKey} />
        <Button colorScheme='blue' size='lg' onClick={handleSubmit}>Add</Button>
      </HStack>
    </Box>
  )
}

export default TaskInput