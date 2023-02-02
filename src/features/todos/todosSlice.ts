import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

type TodoType = {
  id: string
  value: string
  isDone?: boolean
  isDeleted?: boolean
}

type TodosState = TodoType[]


const initialState: TodosState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      return [...state, action.payload]
    }
  }
})

export const { addTodo } = todosSlice.actions

// export const selectTodos = (state: RootState) => state.todos.todos

export default todosSlice.reducer