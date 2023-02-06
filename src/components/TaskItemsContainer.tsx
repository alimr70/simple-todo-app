import { Stack } from "@chakra-ui/react"
import { useAppSelector } from "../utils/hooks"
import TaskItem from "./TaskItem"

const TaskItemsContainer = () => {
  const tasks = useAppSelector(state => state.tasks)

  return (
    <Stack h='full' overflowY='auto'>
      {
        tasks.filter((task) => !task.isDone).map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.value} />
        ))
      }
    </Stack>
  )
}
export default TaskItemsContainer