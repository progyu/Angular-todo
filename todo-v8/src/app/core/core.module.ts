import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosFilterPipe } from './pipes/todos-filter.pipe';

@NgModule({
  declarations: [TodosFilterPipe],
  imports: [ CommonModule],
  exports: [ TodosFilterPipe ]
})
export class CoreModule { }
