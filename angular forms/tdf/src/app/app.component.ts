import { Component } from '@angular/core';
import { User } from './user';

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
    333333,
    'Java',
    'morning',
    false,
  );

  
}
