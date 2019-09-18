import { Component } from '@angular/core';
import { todoItem } from './add-item/add-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  author='KS';
  date= new Date();
  title = 'To-do List';

  todos=[
    { checkitem: true,
      label:'Bring milk',
      done:true,
      priority:1
      },

      {
        label:'Electricity Bill',
        done:false,
        priority:3
        },
      {
      label:'Laundary',
      done:true,
      priority:2
      },  
];


addTodo(newTodoLable){
  var newTodo = {
    label: newTodoLable,
    priority:1,
    done: false
  };
this.todos.push(newTodo);
}

remove(newTodoLable){
  // var newTodo = {
  //   label: newTodoLable,
  //   priority:1,
  //   done: false
  // };
  //const i=this.todos.findIndex(newTodoLable);
  console.log(this.todos.indexOf(newTodoLable));
  this.todos.splice(this.todos.indexOf(newTodoLable), 1);

  //console.log("Ayaa"+i);
}



}
