import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/todos.actions';
import { selectAllTodos } from './store/todos.selectors';

@Component({
  selector: 'ng-todos',
  template: `<div>
    <input #inputRef />
    <button (click)="onAdd(inputRef.value)">add</button>

    <div *ngFor="let todo of todos; let i = index">
      <span>{{ todo }}</span
      ><button (click)="onRemove(i)">X</button>
    </div>
  </div>`,
})
export class TodosComponent {
  title = '';
  todos = this.store.select(selectAllTodos);

  constructor(private store: Store) {}

  onAdd(title: string) {
    this.store.dispatch(addTodo({ payload: { title } }));
  }

  onRemove(id: number) {
    this.store.dispatch(removeTodo({ payload: { id } }));
  }
}
