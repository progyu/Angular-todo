import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';

import { environment } from 'src/environments/environment';

import { Todos } from '../models/todos.interface';

@Injectable({
  providedIn: CoreModule
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todos[]>(environment.appUrl);
  }

  create(todo: Todos) {
    return this.http.post<Todos[]>(environment.appUrl, todo);
  }

  remove(id: number) {
    return this.http.delete<Todos[]>(environment.appUrl + id);
  }

  toggle(id: number, completed: boolean) {
    return this.http.patch<Todos[]>(environment.appUrl + id, { completed });
  }

  toggleAll(check: boolean) {
    return this.http.patch<Todos[]>(environment.appUrl, { completed : check});
  }

  removeAll() {
    return this.http.delete<Todos[]>(environment.appUrl + 'completed');
  }
}
