import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	HEROES: string[];
	studentName: string;
	selectedStudent: String;
	constructor() { }

	ngOnInit() {
  		this.HEROES= [
		  "A",
		  "B",
		  "C",
		  "D",
		  "E"
		];

		this.newFunction();
		this.studentName = "";
	}

	onselect(hero:string) {
		this.selectedStudent = hero;
	}

	newFunction() {
		console.log("This is new function");
	}

}
