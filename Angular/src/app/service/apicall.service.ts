import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {Bannerformrule} from '../banner/bannerformrule';  

import {Headers, Http} from '@angular/http';
import { AppConstants  } from './../AppConstants';

@Injectable({
  providedIn: 'root'
})

export class ApicallService {
	private host = window.location.hostname;
	private headers = new Headers({'Content-Type': 'application/json'});
   	commonUrl:string;

	constructor(private http: Http) {
		this.commonUrl = AppConstants.commonUrl;
	}
	/**
	* Return all users
	* @returns {Promise<User[]>}
	*/
	getBanners(): Promise<Bannerformrule[]> {
	 return this.http.get(this.commonUrl+'banner/getall')
	  .toPromise()
	  .then(response => {
	    return response.json() as Bannerformrule[];
	  })
	  .catch(this.handleError);
	} 



	/**
	* Handles error thrown during HTTP call
	* @param error:any
	* @returns {Promise<never>}
	*/
	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
}
