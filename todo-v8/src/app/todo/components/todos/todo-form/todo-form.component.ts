import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  content: string;

  @Output() add = new EventEmitter();
 
  addTodo() {
    const content = this.content && this.content.trim();
    this.content = '';
    if(!content) return;
    this.add.emit(content)
  }
}
