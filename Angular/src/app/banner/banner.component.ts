import { Component, OnInit } from '@angular/core';
import {Bannerformrule} from './bannerformrule';  
import {ApicallService} from '../service/apicall.service';
import { AppConstants  } from './../AppConstants';

import {Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [ApicallService]
})
export class BannerComponent implements OnInit {

  	constructor(private router: Router,
              private apicallService: ApicallService) { }

    bannerformrule: Bannerformrule[];

	ngOnInit() {
		this.getBanners();
	}

	view(id: string): void {
		this.router.navigate(['/bannerUpdate', id]);
	}

	getBanners(): void {
		this.apicallService.getBanners()
		  .then(bannerformrule => {
		    console.log(bannerformrule);
		    let response = JSON.parse(JSON.stringify(bannerformrule));
		    this.bannerformrule = response.response;
		});
	}

}
