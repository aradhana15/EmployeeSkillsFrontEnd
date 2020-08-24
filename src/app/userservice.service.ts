import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const myheader = 
{
 headers : new HttpHeaders({'Content-type':'application/json'})
}  
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  constructor(private http : HttpClient) { }
  listuser() : Observable<User[]>
  {
    console.log('ListUser');
    return this.http.get<User[]>("http://localhost:9099/allEmployees");

  }
  register(user : User) {
   return this.http.post<User>('http://localhost:9099/addEmployee',user,myheader); 
  }
  getEmployeeById(id : Number):Observable<User>
  {
    return this.http.get<User>("http://localhost:9099/getEmployee/"+id);
  }
  updateEmployee(user:User):Observable<User>
  {
      //this.getEmployeeById(id).subscribe( (data)=>{user=data});
      return this.http.put<User>("http://localhost:9099/updateEmoloyee/",user,myheader);
  }
  deleteEmployee(id : Number):Observable <User>
  {
    return this.http.delete<User>("http://localhost:9099/deleteEmployee/"+id,myheader);
  }
}
