import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack } from "@chakra-ui/react"
import { useAppSelector } from "../hooks/reduxHooks"
import TaskItem from "./TaskItem"

const TaskItemsContainer = () => {
  const tasks = useAppSelector(state => state.tasks)
  const lang = useAppSelector(state => state.lang.lang)

  return (
    <>
      <Stack h='full' overflowY='auto'>
        {
          tasks.filter((task) => !task.isDone).map((task) => (
            <TaskItem key={task.id} id={task.id} title={task.value} isDone={task.isDone} />
          ))
        }
        {/* 
        <TaskItem key='3' id='3' title='تظبيط الألوان في الوضع المضيئ' />
        <TaskItem key='4' id='4' title='عمل نافذة حوارية لتأكيد مسح المهمة' />
        <TaskItem key='5' id='5' title='رفع المشروع على إستضافة' />
        <TaskItem key='6' id='6' title='حفظ المهام في ذاكرة المتصفح' />
        <TaskItem key='7' id='7' title='تحسين الأداء من حيث إعادة الرسم rerender' /> */}
      </Stack>

      {
        tasks.filter((task) => task.isDone).length > 0 && (
          <Accordion allowToggle overflowY='auto' maxH='20%'>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='start'>
                  {lang === 'en' ? 'Done Tasks' : 'مهام مُنفَّذة'}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {
                  tasks.filter((task) => task.isDone).map((task) => (
                    <TaskItem key={task.id} id={task.id} title={task.value} isDone={task.isDone} />
                  ))
                }
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )
      }
    </>
  )
}
export default TaskItemsContainer