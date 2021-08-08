import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor2',
  templateUrl: './name-editor2.component.html',
  styleUrls: ['./name-editor2.component.css']
})
export class NameEditor2Component implements OnInit {

  registerForm : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }
  profileForm =new FormGroup(
    {
      title:new FormControl(''),
      email:new FormControl(''),
      phoneNummber:new FormControl(''),
      password:new FormControl(''),
      ConfirmPassword:new FormControl('')
    }
  );
  title=new FormControl();
  email=new FormControl();
  phoneNummber=new FormControl();
  password=new FormControl();
  ConfirmPassword=new FormControl();

  ngOnInit() {
    this.profileForm=this.formBuilder.group({
      title:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phoneNummber:['',Validators.required,Validators.minLength(10)],
      password:['',Validators.required,Validators.minLength[8]],
      ConfirmPassword:['',Validators.required,Validators.minLength[8]]

    })
    


  }
  newFunction2(){
    

  }
  get f(){
    return this.profileForm.controls;
  }
  onSubmit(){

    this.submitted=true;
    if(this.profileForm.invalid){
      return
    }
    alert('Success!:!- \n\n '+JSON.stringify(this.profileForm.value,null,4));

  }

}
