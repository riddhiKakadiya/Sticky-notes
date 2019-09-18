import { Component, OnInit, Input } from '@angular/core';
import { input } from '../todo-item/todo-item.component';
import {todoItemList} from './add-item.service';
import {AddItemService} from './add-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  providers: [AddItemService]
})
export class AddItemComponent implements OnInit {
 // @Input() todoList: todoItem;
 todoList: todoItem;
  todo: todoItem[];
  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
          this.getList();
        // on button click, if there is an item in the field, add that text to todo list.
          let btn = document.getElementById('add');
          btn.addEventListener('click', (e:Event) => this.getInput());   
          
  }
  author='Rk';
  date= new Date();
  title = 'To-do List';

  
  getList(): void {
    this.todo=this.addItemService.getList();
    }
  
  getInput():void {

    var input = (<HTMLInputElement> document.getElementById('input')).value;
        console.log(input);
        console.log(this.todo);
        this.todoList=new todoItem();
        this.todoList.items=input;
        this.addItemService.getList().push(this.todoList);
  
  }

}
export class todoItem {
  items: string; 
}