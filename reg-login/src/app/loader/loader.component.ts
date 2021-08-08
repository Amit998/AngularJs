import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isShow:boolean = true;

  constructor() { }

  statu:true;

  ngOnInit(): void {
  }
  onToggle(j){
    j.show=!j.show;
  }
  onLoad(){
    

  }

}
