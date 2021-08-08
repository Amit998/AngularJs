import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { 


  }
  profileForm =new FormGroup(
    {
      name:new FormControl(''),
      email:new FormControl('')
    }
  );
  name=new FormControl();
  email=new FormControl();
  number=new FormControl();
  myName=String;
  ngOnInit(): void {
  }
  newFunction(){
    console.log("Hello World"+"lol")
    console.log("This is My name "+this.name.value);
    console.log("This is My email "+this.email.value);
    console.log("This is My Number "+this.number.value);
  }

  newFunction1(){
    console.log(this.profileForm.value);
    console.log("This is log: " + JSON.stringify(this.profileForm.value))
    console.log("This is My name "+ this.profileForm.value.name);
    
    this.myName=this.profileForm.value.name;
    console.log(this.myName);
    


    
  }

}
