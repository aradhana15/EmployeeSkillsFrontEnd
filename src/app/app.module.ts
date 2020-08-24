import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    DeleteemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule , FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
