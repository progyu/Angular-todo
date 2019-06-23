import { Component } from '@angular/core';

import { Todos } from '../todos.interface';
import { NavItem } from '../navItem.type';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  constructor() {
    this.getTodos();
  }

  _todos: Todos[];

  getTodos() {
    setTimeout(() => {
      this._todos = [{ id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'JS', completed: false }]
    }, 3000);
  }

  navItems: NavItem[] = ['All', 'Active', 'Completed'];

  navState: NavItem = 'All';

  addTodo(input: HTMLInputElement) {
    if (!input.value.trim()) return;
    this._todos = [{ id: this.generateId, content: input.value, completed: false }, ...this._todos];
    input.value = '';
  }

  removeTodo(delId: number) {
    this._todos = this._todos.filter(({ id }) => delId !== id);
  }

  checkTodo(checkId: number) {
    this._todos = this._todos.map(todo => checkId === todo.id ? { ...todo, completed: !todo.completed } : todo);
  }

  checkAll(check: boolean) {
    this._todos = this._todos.map(todo => ({ ...todo, completed: check }));
  }

  clearCompleted() {
    this._todos = this._todos.filter(({ completed }) => !completed);
  }

  get generateId() {
    return this._todos.length ? Math.max(...this._todos.map(({ id }) => id)) + 1 : 1;
  }

  get CompletedCount() {
    if (!this._todos) return;
    return this._todos.filter(({ completed }) => completed).length;
  }

  get LeftCount() {
    if (!this._todos) return;
    return this._todos.length - this.CompletedCount;
  }

  get checkAllMark() {
    if (!this._todos) return;
    return this._todos.every(({ completed }) => completed);
  }
}