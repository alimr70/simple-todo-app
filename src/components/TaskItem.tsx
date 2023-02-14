import { Heading, IconButton, Flex, AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Button, AlertDialogContent, useDisclosure } from "@chakra-ui/react"
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { checkTask, deleteTask } from "../features/tasks/tasksSlice"
import { useRef } from "react"

type PropsType = {
  id: string
  title: string
  isDone?: boolean
}

const TaskItem = ({ id, title, isDone }: PropsType) => {
  const lang = useAppSelector(state => state.lang.lang)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

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
      <IconButton variant='outline' onClick={onOpen} ms='auto' aria-label="DeleteIcon" icon={<DeleteIcon color='red.500' />} />

      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          {/* <AlertDialogHeader my='5'>{lang === 'en' ? 'Delete Task' : 'أمسح المهمة'}</AlertDialogHeader> */}
          <AlertDialogCloseButton />
          <AlertDialogBody mt={8}>
            {lang === 'en' ? 'Are you sure you want to Delete this task?' : 'هل أنت متأكد من مسح هذه المهمة؟'}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {lang === 'en' ? 'No' : 'لا'}
            </Button>
            <Button onClick={handleDelete} colorScheme='red' ms={3}>
              {lang === 'en' ? 'Yes' : 'نعم'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  )
}
export default TaskItem