import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
   // console.log('delete me');
   //remove form UI 
   this.todos = this.todos.filter(t => t.id !== todo.id);
   //remove from server 
   this.todoService.deleteTodo(todo).subscribe();
    }

    addTodo(todo:Todo) {
      this.todoService.addTodo(todo).subscribe(newTodo => {
        this.todos = [...this.todos, newTodo];
      });
    }

    trackByTodoId(index: number, todo: Todo): number {
      return todo.id;
    }
}
