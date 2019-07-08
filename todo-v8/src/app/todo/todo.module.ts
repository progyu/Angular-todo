import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

import { TodoContainerComponent } from './components/todos/todo-container/todo-container.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoNavComponent } from './components/todos/todo-nav/todo-nav.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todos/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent
  ]
})
export class TodoModule { }
