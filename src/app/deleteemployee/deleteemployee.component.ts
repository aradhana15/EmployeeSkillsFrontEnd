import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {

  constructor(private service: UserserviceService , private route : ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.deleteEmployee();
  }
  deleteEmployee()
  {
    const id = this.route.snapshot.params["id"];
    this.service.deleteEmployee(id).subscribe( (data)=>{
      this.router.navigate(["listuser"]);
      console.log(data);
    },(err)=>console.log(err) )
  }

}
