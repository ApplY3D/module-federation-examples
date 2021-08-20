import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/todos.actions';
import { selectAllTodos } from './store/todos.selectors';

@Component({
  selector: 'ng-todos',
  template: `<div>
    <input #inputRef />
    <button (click)="onAdd(inputRef.value)">add</button>

    <div *ngIf="todos$ | async as todos">
      <div *ngFor="let todo of todos; let i = index">
        <span>{{ todo }}</span
        ><button (click)="onRemove(i)">X</button>
      </div>
    </div>
  </div>`,
})
export class TodosComponent {
  title = '';
  todos$ = this.store.select(selectAllTodos);
  @ViewChild('inputRef', { static: false }) inputRef?: ElementRef;

  constructor(private store: Store) {}

  onAdd(title: string) {
    if (!title) return;
    this.store.dispatch(addTodo({ payload: { title } }));
    (<HTMLInputElement>this.inputRef?.nativeElement).value = '';
  }

  onRemove(id: number) {
    this.store.dispatch(removeTodo({ payload: { id } }));
  }
}
