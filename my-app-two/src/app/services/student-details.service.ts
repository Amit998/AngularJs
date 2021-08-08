import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  getStudentDetails(){

    return [
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
}
