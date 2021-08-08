import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { NameFormComponent } from './name-form/name-form.component';
import { from } from 'rxjs';
import { NameEditor2Component } from './name-editor2/name-editor2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NameFormComponent,
    NameEditor2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
