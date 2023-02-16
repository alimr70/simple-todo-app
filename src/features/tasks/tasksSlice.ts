import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type TaskType = {
  id: string
  value: string
  isDone?: boolean
}

type TasksState = TaskType[]
type CheckTaskType = { id: string }

const savedTasks: TasksState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []

const initialState: TasksState = savedTasks

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state = [...state, action.payload]
      localStorage.setItem('tasks', JSON.stringify(state))
      return state
    },
    checkTask: (state, action: PayloadAction<CheckTaskType>) => {
      let targetTask = state.find(task => task.id === action.payload.id) as TaskType
      targetTask = { ...targetTask, isDone: !targetTask.isDone }
      state = state.filter(task => task.id !== action.payload.id)
      state = [...state, targetTask]
      localStorage.setItem('tasks', JSON.stringify(state))
      return state
    },
    deleteTask: (state, action: PayloadAction<CheckTaskType>) => {
      state = state.filter(task => task.id !== action.payload.id)
      localStorage.setItem('tasks', JSON.stringify(state))
      return [...state]
    },
  }
})

export const { addTask, checkTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer