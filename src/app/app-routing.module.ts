import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListuserComponent} from './listuser/listuser.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';


const routes: Routes = [
  { path:'listuser' , component:ListuserComponent} , 
  { path :'adduser' , component:AddemployeeComponent},
  { path :'updateUser/:id' , component: UpdateemployeeComponent}
  // { path :'deleteUser/:id', component: DeleteemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
