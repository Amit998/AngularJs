import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BannerComponent } from './banner/banner.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';

const routes: Routes = [{
	   path: '',
	   component: HomeComponent
	  },{
	   path: 'login',
	   component: LoginComponent
	  },{
	   path: 'angular',
	   component: AngularComponent
	  },{
	   path: 'register',
	   component: RegisterComponent
	  },{
	   path: 'banner',
	   component: BannerComponent
	  }, {
		path: 'bannerUpdate/:id',
		component: ViewbannerComponent
	  }
	  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
