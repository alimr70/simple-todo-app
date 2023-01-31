import { HStack, Center, Box, Input, Button } from '@chakra-ui/react'

const TaskInput = () => {
  return (
    <Center>
      <Box maxW='md' borderWidth='1px' borderRadius='lg'>
        <HStack>
          <Input variant='outline' placeholder='Outline' />
          <Button colorScheme='blue'>Add</Button>
        </HStack>
      </Box>
    </Center>
  )
}

export default TaskInput