import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { switchMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-viewbanner',
  templateUrl: './viewbanner.component.html',
  styleUrls: ['./viewbanner.component.css']
})
export class ViewbannerComponent implements OnInit {

	selectedId: string;
	selectedSection: string;

	constructor(private actRoute: ActivatedRoute) {
		this.selectedId = this.actRoute.snapshot.params.id;
	}


	ngOnInit() {
			
		
	}

}
