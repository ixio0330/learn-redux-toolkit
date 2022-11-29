import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    clear(state) {
      state.todos = [];
    },
    insert(state, action) {
      state.todos.push({ id: v1(), isDone: false, text: action.payload });
    },
    updateIsDone(state, action) {
      const updateTodo = state.todos.find((todo) => todo.id === action.payload);
      updateTodo.isDone = !updateTodo.isDone;
    },
    remove(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { insert, remove, clear, updateIsDone } = todoSlice.actions;

export default todoSlice.reducer;