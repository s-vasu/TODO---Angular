import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css']
})
export class AddTodoComponent {
  newTodoTitle = '';

  @Output() add = new EventEmitter<string>();

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.add.emit(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }
}
