import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.reducer';

const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  ({ todos }) => todos
);

export const selectLastEdit = createSelector(
  selectTodosState,
  ({ lastEdit }) => lastEdit
);
