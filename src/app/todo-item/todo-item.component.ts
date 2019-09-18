import { Component, OnInit, Input } from '@angular/core';
import {AddItemComponent } from "../add-item/add-item.component"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() input:String; 
  constructor() {      
      var lists = {
    todo: document.getElementById('todo'),
    // todo1: document.getElem"entById('todo1'),
  
    done: document.getElementById('done')
            }
}
  
  ngOnInit() {
  
    
              // var todo= document.getElementById('todo'),
              // // todo1: document.getElem"entById('todo1'),
            
              // var done= document.getElementById('done')
              // var lists = [todo,done];
              //var listItem = this.input;

  }
          // console.log(this.listItem,'2');          //comment it later
      //      onInput = function(listItem){
        
      // if(listItem.length > 0){
      //     this.addTask(this.makeTasksHTML(listItem)); //makeTasksHTML method creates to-do list
      //   }
      // };        


      //    makeTasksHTML(listItem:String) {

      //     var el = document.createElement('li');
         
      //      var checkBox = document.createElement('input');
      //      var label = document.createElement('span');
      
      //     checkBox.type = 'checkbox';
      //     //function  on check
      //     alert("check box created");
      //     checkBox.addEventListener('click', (e:Event) => this.onCheck());
      //     label.textContent = this.listItem;
      //     console.log(listItem);
      //     el.appendChild(checkBox);
      //     el.appendChild(label);
          
      //     return el;
      // };

      //    addTask(list:string, task:Document){
      //     list.appendChild(task);
      // };
      //   var onCheck  = function(event){
      //     //references the clicked element    
      //     var task = event.target.parentElement;
      
      //     // moving it to 'done' list   
      //     var list = task.parentElement,id;
            
      //         lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
          
      //     };
      //   addTask(lists.todo, makeTasksHTML(this.input));



}
export var input:string;

