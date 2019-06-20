import { Component } from '@angular/core';
import { Todos } from '../todos.interface';
import { Tabs } from '../tabs.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  private _todos: Todos[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ]

  _tabs: Tabs[] = [
    { state: 'All' },
    { state: 'Active' },
    { state: 'Completed' }
  ]

  _navState: string = 'All';

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
    this._todos = this._todos.map(todo => check ? { ...todo, completed: true } : { ...todo, completed: false });
  }

  clearCompleted() {
    this._todos = this._todos.filter(({ completed }) => !completed);
  }

  changeState(state: string) {
    this._navState = state;
  }

  get Todo() {
    if (this._navState === 'All') return this._todos;
    else if (this._navState === 'Active') return this._todos.filter(todo => !todo.completed);
    else return this._todos.filter(todo => todo.completed);
  }

  get generateId() {
    return this._todos.length ? Math.max(...this._todos.map(({ id }) => id)) + 1 : 1;
  }

  get CompletedCount() {
    return this._todos.filter(({ completed }) => completed).length;
  }

  get LeftCount() {
    return this._todos.length - this.CompletedCount;
  }

  get checkAllMark() {
    return this._todos.every(({ completed }) => completed);
  }
}