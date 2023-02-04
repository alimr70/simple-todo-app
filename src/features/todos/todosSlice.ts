import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

type TodoType = {
  id: string
  value: string
  isDone?: boolean
}

type TodosState = TodoType[]
type CheckTodoType = { id: string }


const initialState: TodosState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      return [...state, action.payload]
    },
    checkTodo: (state, action: PayloadAction<CheckTodoType>) => {
      let targetTodo = state.find(todo => todo.id === action.payload.id) as TodoType
      targetTodo = { ...targetTodo, isDone: true }
      state = state.filter(todo => todo.id !== action.payload.id)
      return [...state, targetTodo]
    },
    deleteTodo: (state, action: PayloadAction<CheckTodoType>) => {
      state = state.filter(todo => todo.id !== action.payload.id)
      return [...state]
    },
  }
})

export const { addTodo, checkTodo, deleteTodo } = todosSlice.actions

// export const selectTodos = (state: RootState) => state.todos.todos

export default todosSlice.reducer