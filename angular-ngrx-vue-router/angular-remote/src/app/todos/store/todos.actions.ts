import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ payload: { title: string } }>()
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ payload: { id: number } }>()
);
