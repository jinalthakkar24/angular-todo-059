import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoServie:TodoService) { }

  ngOnInit(): void {
  }


  //set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  //ontoggle
  onToggle(todo){
    //Toggle in UI 
    todo.completed = !todo.completed;
    //TOggle on Server
    this.todoServie.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

   //onDeelte
   onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
