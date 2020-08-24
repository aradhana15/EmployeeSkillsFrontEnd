import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  @Input() user : User= {name:'' , desig:'' , salary:0 , emailId:''};
  ngOnInit(): void {
  }

  constructor(private service:UserserviceService , private router: Router){}
  register()
  {
     console.log(this.user);
     this.service.register(this.user).subscribe( (result)=>{this.router.navigate(["listuser"]);
    },(err)=>{console.log(err);
    });
}
}