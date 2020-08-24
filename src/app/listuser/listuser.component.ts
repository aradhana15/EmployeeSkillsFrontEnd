import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserserviceService} from '../userservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any;
  constructor(private userservice: UserserviceService ) { }

  ngOnInit(): void {
    this.listusers();
  }
  listusers() : void{
    alert('List Users');
    this.userservice.listuser().subscribe(data => {
     // console.log(this.users);
            this.users = data;
    });
  }
  deleteEmployee(id : Number)
  {
    alert(id);
    //const id = this.route.snapshot.params["id"];
    this.userservice.deleteEmployee(id).subscribe( (data)=>{
      this.listusers()
      //this.router.navigate(["listuser"]);
      console.log(data);
    },(err)=>console.log(err) )
  }



}
