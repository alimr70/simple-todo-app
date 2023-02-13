import { Stack } from "@chakra-ui/react"
import { useAppSelector } from "../hooks/reduxHooks"
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
      <TaskItem key='1' id='1' title='تظبيط شكل علامة الصح' />
      <TaskItem key='2' id='2' title='إنشاء قسم المهام المنفذة' />
      <TaskItem key='3' id='3' title='تظبيط الألوان في الوضع المضيئ' />
      <TaskItem key='4' id='4' title='عمل نافذة حوارية لتأكيد مسح المهمة' />
      <TaskItem key='5' id='5' title='رفع المشروع على إستضافة' />
      <TaskItem key='6' id='6' title='حفظ المهام في ذاكرة المتصفح' />
      <TaskItem key='7' id='7' title='تحسين الأداء من حيث إعادة الرسم rerender' />
    </Stack>
  )
}
export default TaskItemsContainer