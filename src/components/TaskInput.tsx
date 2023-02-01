import { HStack, Box, Input, Button } from '@chakra-ui/react'

const TaskInput = () => {
  return (
    <Box>
      <HStack>
        <Input variant='outline' placeholder='New Task' size='lg' />
        <Button colorScheme='blue' size='lg'>Add</Button>
      </HStack>
    </Box>
  )
}

export default TaskInput