import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { ListTitleComponent } from './list-title/list-title.component';
import { AddItemComponent } from './add-item/add-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTitleComponent,
    AddItemComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
