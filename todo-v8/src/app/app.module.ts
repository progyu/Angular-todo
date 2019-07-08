import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './todo/todo.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
