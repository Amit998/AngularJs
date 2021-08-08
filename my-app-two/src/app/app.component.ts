import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  todoValue:string;
  list:Todo[];

  ngOnInit() :void {
    this.list=[];
    this.todoValue="";
    
    
  }  

  
  //date = new Date();
 // name = 'Amit Dutta';

  //constructor(){

  //   console.log("Called Constructor");
  //   this.doSomething('Amit Dutta');
  // }
  // doSomething(val:string): void{
  //   val = "awesome";
  // }
  addItem(){
    if(this.todoValue !==""){
      const newItem: Todo={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);



    }
    this.todoValue="";
  }

  deleteItem(id:number){
    this.list=this.list.filter(item => item.id !==id);

  }


}
