import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todos } from '../../../types/todos.interface';
import { NavItem } from '../../../types/navItem.type';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  _todos: Todos[];

  navItems: NavItem[] = ['All', 'Active', 'Completed'];

  navState: NavItem = 'All';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTodos();
  }

  // 서버에 모든 todos를 요청한다.
  getTodos() {
    this.http.get<Todos[]>(environment.appUrl)
    .subscribe(todos => this._todos = todos);
  }

  // todo를 추가한다.
  addTodo(input: HTMLInputElement) {
    if (!input.value.trim()) return;
    this.http.post<Todos[]>(environment.appUrl, { 
      id: this.generateId,
      content: input.value,
      completed: false 
    }).subscribe(todos => this._todos = todos);
    input.value = '';
  }

  // id를 확인하여 todo를 지운다.
  removeTodo(delId: number) {
    this.http.delete<Todos[]>(environment.appUrl + delId)
    .subscribe(todos => this._todos = todos);
  }

  // id를 확인하여 check 한다.
  checkTodo(checkId: number) {
    const completed = !this._todos.find(todo => todo.id === checkId).completed;
    this.http.patch<Todos[]>(environment.appUrl + checkId, { completed })
    .subscribe(todos => this._todos = todos);
  }

  // 모든 check box를 check 한다.
  checkAll(check: boolean) {
    this.http.patch<Todos[]>(environment.appUrl, { completed : check})
    .subscribe(todos => this._todos = todos);
  }

  // completed 값이 true인 모든 todo를 삭제한다.
  clearCompleted() {
    this.http.delete<Todos[]>(environment.appUrl + 'completed')
    .subscribe(todos => this._todos = todos);
  }

  // todo 마다 id를 생성한다.
  get generateId() {
    return this._todos.length ? Math.max(...this._todos.map(({ id }) => id)) + 1 : 1;
  }

  // 완료한 todo의 개수를 센다.
  get CompletedCount() {
    if (!this._todos) return;
    return this._todos.filter(({ completed }) => completed).length;
  }

  // 완료하지 못한 todo의 개수를 센다.
  get LeftCount() {
    if (!this._todos) return;
    return this._todos.length - this.CompletedCount;
  }

  // 모든 todo의 checkbox가 true일 시, Mark all as completed의 checked 값도 true로 변환한다.
  get checkAllMark() {
    if (!this._todos) return;
    return this._todos.every(({ completed }) => completed);
  }
}