import { Component, OnInit } from '@angular/core';
import { StudentCollection } from '../models/StudentCollection';
//import { deleteStudent } from '../each-student/each-student.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  title = 'my-app';
  data:any;
  isShow:boolean = true;
  stuCollection:StudentCollection[];

  constructor() { }
  

  ngOnInit(): void {
    this.data=this.getData();
    this.stuCollection= [
      {
        "StudentId":1,
        "StudentName":"Amit Dutta",
        "Batch":"Bcs3a",
        status:true
      },
      {
        "StudentId":2,
        "StudentName":"Bratati Banerjee",
        "Batch":"Bcs3b",
        status:true
      },
      {
        "StudentId":3,
        "StudentName":"Kuntal Dutta",
        "Batch":"ME3a",
        status:true
      }
    ]
    
  }
  toggleShow(){
    this.isShow=!this.isShow;
  }
  getData(){
    return  [
      {
      "StudentId":1,
      "StudentName":"Amit Dutta",
      "Batch":"Bcs3a"
    },
    {
      "StudentId":2,
      "StudentName":"Bratati Banerjee",
      "Batch":"Bcs3b"
    },
    {
      "StudentId":3,
      "StudentName":"Kuntal Dutta",
      "Batch":"ME3a"
    }
  
  ];
  }
  deleteStudent(stuCollection:StudentCollection){
    this.stuCollection=this.stuCollection.filter(t => t.StudentId !== stuCollection.StudentId );
    
  }


}
