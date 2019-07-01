import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './components/todos/todo-container/todo-container.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoNavComponent } from './components/todos/todo-nav/todo-nav.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todos/todo-footer/todo-footer.component';
import { TodosFilterPipe } from './pipes/todos-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
