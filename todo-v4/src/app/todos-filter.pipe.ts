import { Pipe, PipeTransform } from '@angular/core';

import { Todos } from './todos.interface';
import { NavItem } from './navItem.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  // | todosFilter: navState
  transform(todos: Todos[], navState: NavItem): Todos[] {
    return todos.filter(todo => {
      if (navState === 'Active') { return !todo.completed; }
      if (navState === 'Completed') { return todo.completed; }
      return true;
    })
  }
}
