import { Action, createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todos.actions';

export const todosStoreFeatureKey = 'todos';

export interface TodosState {
  todos: string[];
  lastEdit: null | string;
}

export const initialTodosState: TodosState = {
  todos: [],
  lastEdit: null,
};

export const todosReducer = createReducer(
  initialTodosState,
  on(addTodo, (state, { payload: { title } }) => ({
    ...state,
    todos: [...state.todos, title],
  })),
  on(removeTodo, (state, { payload: { id } }) => ({
    ...state,
    todos: [...state.todos.slice(0, +id), ...state.todos.slice(+id + 1)],
  }))
);
