import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todos } from '../../../../core/models/todos.interface';
import { NavItem } from '../../../../core/models/navItem.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() _todos: Todos[];
  @Input() navState: NavItem;

  @Output() check = new EventEmitter();
  @Output() remove = new EventEmitter();
}
