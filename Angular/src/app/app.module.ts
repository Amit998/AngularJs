import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderlinksComponent } from './headerlinks/headerlinks.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { RegisterComponent } from './register/register.component';
import { BannerComponent } from './banner/banner.component';
import { ViewbannerComponent } from './viewbanner/viewbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HeaderlinksComponent,
    HomeComponent,
    AngularComponent,
    LoginComponent,
    HighlightDirective,
    RegisterComponent,
    BannerComponent,
    ViewbannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
