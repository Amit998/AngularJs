import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { EachStudentComponent } from './each-student/each-student.component';
import { from } from 'rxjs';
import { UpperPortionComponent } from './upper-portion/upper-portion.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    EachStudentComponent,
    UpperPortionComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
