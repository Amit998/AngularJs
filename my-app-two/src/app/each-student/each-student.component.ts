import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { StudentCollection } from '../models/StudentCollection';

@Component({
  selector: 'app-each-student',
  templateUrl: './each-student.component.html',
  styleUrls: ['./each-student.component.css']
})
export class EachStudentComponent implements OnInit {
  title = 'my-app';
  data:any;
  isShow:boolean = true;
  studentCollection : StudentCollection[]=[

    
  ];


  @Input() j: StudentCollection;
  @Output() deleteStudent : EventEmitter<StudentCollection> = new EventEmitter();
  constructor() { }
  StuName:String;
  stuId:number;
  StuBatch:String;

  ngOnInit(): void {
    
  }
  setClasses(){
    let Classes={
      j:true,
      'is-complete':this.j.status
    }
     return Classes;
  }

  onToggle(j){
    j.status=!j.status;
  }
  onDelete(j){
    this.deleteStudent.emit(j);
  }
  onShow(j){
    this.isShow=!this.isShow;
    console.log(j);
    //this.data=this.data;
  }
  onClick(j){
    //j.StudentId=id;
    
    //this.StuName=JSON.stringify(j.StudentName)
    console.log(j.StudentName);
    this.StuName = j.StudentName;
    this.stuId = j.StudentId;
    this.StuBatch = j.Batch;
  }
}
