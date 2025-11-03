import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list';

export const TODOS_ROUTES: Routes = [
  { path: '', component: TodoListComponent, data: { animation: 'Todos' } }
];

