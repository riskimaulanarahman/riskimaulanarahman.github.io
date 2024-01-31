import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoList } from '@/types/todo-list';
import { RootState } from '@/store/store';

const initialState: TodoList[] = [];

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<TodoList>) => {
      return [...state, action.payload];
    },
    deleteTodoList: (state, action: PayloadAction<TodoList>) => {
      const { payload } = action;
      return state.filter((value) => value.id !== payload.id);
    },
    editTodoList: (state, action: PayloadAction<TodoList>) => {
      const { payload } = action;
      const editedIndex = state.findIndex((value) => value.id === payload.id);
      state[editedIndex] = payload;
      return state;
    },
    toggleTodoList: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const editedIndex = state.findIndex((value) => value.id === payload);
      state[editedIndex].isCompleted = !state[editedIndex].isCompleted;
      return state;
    },
  },
});

export const getAllTodoList = (state: RootState) => state.reducer;
export const { addTodoList, deleteTodoList, editTodoList, toggleTodoList } =
  todoListSlice.actions;

export default todoListSlice.reducer;
