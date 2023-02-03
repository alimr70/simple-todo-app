import { Heading, IconButton, Flex } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

type PropsType = {
  title: string
}

const TaskItem = ({ title }: PropsType) => {
  return (
    <Flex direction='row' align='center' gap={3} border='1px' borderRadius="xl" borderColor='gray.600' p={2} my='2'>
      <IconButton borderRadius="3xl" aria-label="CheckIcon" icon={<CheckIcon />} />
      <Heading fontSize='xl'>{title}</Heading>
      <IconButton ml='auto' aria-label="DeleteIcon" icon={<DeleteIcon color='red.500' />} />
    </Flex>
  )
}
export default TaskItem