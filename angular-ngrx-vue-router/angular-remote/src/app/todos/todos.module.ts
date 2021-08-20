import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todosReducer, todosStoreFeatureKey } from './store/todos.reducer';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(todosStoreFeatureKey, todosReducer),
  ],
})
export class TodosModule {}
