import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo';
import { Todo } from '../../models/todo';
import { AddTodoComponent } from '../add-todo/add-todo';
import { TodoItemComponent } from '../todo-item/todo-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, TodoItemComponent, RouterModule],
  templateUrl: './todo-list.html',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addNewTodo(title: string) {
    this.todoService.addTodo(title);
    this.todos = this.todoService.getTodos();
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
