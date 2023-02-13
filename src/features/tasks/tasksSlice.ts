import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type TaskType = {
  id: string
  value: string
  isDone?: boolean
}

type TasksState = TaskType[]
type CheckTaskType = { id: string }


const initialState: TasksState = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      return [...state, action.payload]
    },
    checkTask: (state, action: PayloadAction<CheckTaskType>) => {
      let targetTask = state.find(task => task.id === action.payload.id) as TaskType
      targetTask = { ...targetTask, isDone: !targetTask.isDone }
      state = state.filter(task => task.id !== action.payload.id)
      return [...state, targetTask]
    },
    deleteTask: (state, action: PayloadAction<CheckTaskType>) => {
      state = state.filter(task => task.id !== action.payload.id)
      return [...state]
    },
  }
})

export const { addTask, checkTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer