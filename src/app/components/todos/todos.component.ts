import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  inputTodo: string =''
  todo_list: Array<Todo> = [
    {
      content: 'hola',
      completed: false
    },
    {
      content: 'hola 2',
      completed: true
    }
  ]

  add_todo(){
    this.todo_list.push({
      content: this.inputTodo, 
      completed : false
    })
    this.inputTodo = ''
  }

  toggleCompleted(id:number){
    this.todo_list.map((todo, i) => {
      if (i === id) todo.completed = !todo.completed
    }) 
  }

  delete_todo(id:number){
    this.todo_list = this.todo_list.filter((todo, i) => i !== id ) 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
