import { Pipe, PipeTransform } from '@angular/core';

import { Todos } from '../types/todos.interface';
import { NavItem } from '../types/navItem.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: Todos[], navState: NavItem): Todos[] {
    return todos.filter(todo => {
      if (navState === 'Active') { return !todo.completed; }
      if (navState === 'Completed') { return todo.completed; }
      return true;
    })
  }
}
