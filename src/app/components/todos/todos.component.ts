import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  inputTodo: string =''
  todo_list: Array<Todo> = []

  add_todo(){
    if (this.inputTodo.length <= 1)  return
    this.todo_list.push({
      content: this.inputTodo, 
      completed : false
    })
    this.inputTodo = ''
  }

  edit_todo(content:string, index:number){
    this.todo_list.map((todo, i) => {
      if (content.length === 0) return this.delete_todo(index)
      if (i === index) todo.content = content
    })
  }

  toggleCompleted(index:number){
    this.todo_list.map((todo, i) => {
      if (i === index) todo.completed = !todo.completed
    }) 
  }

  delete_todo(index:number){
    this.todo_list = this.todo_list.filter((todo, i) => i !== index ) 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
