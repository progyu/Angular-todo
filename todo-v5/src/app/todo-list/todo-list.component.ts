import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todos } from '../todos.interface';
import { NavItem } from '../navItem.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css', '../checkbox.css']
})
export class TodoListComponent {
  @Input() _todos: Todos[];
  @Input() navState: NavItem;

  @Output() check = new EventEmitter();
  @Output() remove = new EventEmitter();
}
