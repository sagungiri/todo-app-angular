import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'test',
        completed: false
      },
      {
        content: 'test',
        completed: true
      }
    ]
  }
  todoToogleHandler = (id: number) => {
    this.todos.map((val, index) => {
      if (index == id) {
        return val.completed = !val.completed;
      }
      return val;
    })
  }
  deleteTodoHandler = (id: number) => {
    let updatedTodo = this.todos.filter((val, index) => index != id)
    this.todos = updatedTodo;
  }
  addTodoHandler = () => {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }

}
