import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "../features/tasks/tasksSlice"
import langSlice from "../features/lang/langSlice"

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    lang: langSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch