import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Math.random(),
        value: action.payload
      }) 
    },
    deleteTodo: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
    },
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer