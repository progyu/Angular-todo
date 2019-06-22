import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavItem } from '../navItem.type';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent {
  @Input() navItems: NavItem[];
  @Input() navState: NavItem;

  @Output() state = new EventEmitter();
}
