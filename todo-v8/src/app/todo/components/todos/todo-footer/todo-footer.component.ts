import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  @Input() checkAllMark: boolean;
  @Input() CompletedCount: number;
  @Input() LeftCount: number;

  @Output() checkAll = new EventEmitter();
  @Output() clearCompleted = new EventEmitter();
}
