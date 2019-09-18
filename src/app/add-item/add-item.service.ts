import { Injectable } from '@angular/core';
import {todoItem} from './add-item.component'

@Injectable()
export class AddItemService {

  constructor() { }
  getList(): todoItem[] {
    return todoItemList;
    }
    }
    
    // object name kind of : return type(of class )
    export const todoItemList: todoItem[] = [
      {
        'items':'Wake up!'
        // 'date': new Date().toLocaleString()
     },
     {
      'items':'Groceries'
       },
        {
          'items':"watering the plants"
        },
        {
          'items':"feeding the dog"}]
    

