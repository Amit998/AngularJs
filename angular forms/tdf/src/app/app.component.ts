import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics=["Angular","React","Vue"]


  title = 'tdf';

  userModel=new User(
    'Rob',
    'rob@test.com',
    1234321234,
    'default',
    'morning',
    false,
  );


  constructor(private _enrollmentService:EnrollmentService){

  }

  topicHasError=true;

  validateTopic(value:string){
    if(value ==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){

    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log(data,'success'),
      err => console.error(err)
    )
  }

  
}
