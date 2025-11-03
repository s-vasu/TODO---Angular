import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular basics', completed: false },
    { id: 2, title: 'Build a Todo app', completed: true },
  ];

  // 🔁 Shared observable for components
  private totalCount = new BehaviorSubject<number>(this.todos.length);
  totalCount$ = this.totalCount.asObservable();

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.updateCount();
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.updateCount();
  }

  private updateCount() {
    this.totalCount.next(this.todos.length);
  }
}
