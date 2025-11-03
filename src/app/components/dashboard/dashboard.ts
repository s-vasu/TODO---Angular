import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  totalTodos = 0;

  constructor(private todoService: TodoService) {
    this.todoService.totalCount$.subscribe(count => {
      this.totalTodos = count;
    });
  }
}
