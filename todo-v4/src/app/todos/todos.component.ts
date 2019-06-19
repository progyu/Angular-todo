import { Component } from '@angular/core';
import { Todos } from '../todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  navState: string = 'all';

  todos: Todos[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false },
  ]

  addTodo(input: HTMLInputElement) {
    if (!input.value.trim()) return;
    this.todos = [{ id: this.generateId(), content: input.value, completed: false }, ...this.todos];
    input.value = '';
  }

  removeTodo(delId: number) {
    this.todos = this.todos.filter(({ id }) => delId !== id);
  }

  checkTodo(checkId: number) {
    this.todos = this.todos.map(todo => checkId === todo.id ? { ...todo, completed: !todo.completed } : todo);
  }

  allCheck(check: boolean) {
    this.todos = this.todos.map(todo => check ? { ...todo, completed: true } : { ...todo, completed: false });
  }

  clearCompleted() {
    this.todos = this.todos.filter(({ completed }) => !completed);
  }

  tabTodo(id: string) {
    this.navState = id;
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  get Todo() {
    if (this.navState === 'all') return this.todos;
    else if (this.navState === 'active') return this.todos.filter(todo => !todo.completed);
    else return this.todos.filter(todo => todo.completed);
  }

  get CompletedCount() {
    return this.todos.filter(({ completed }) => completed).length;
  }

  get LeftCount() {
    return this.todos.length - this.CompletedCount;
  }
}