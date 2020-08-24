import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  @Input() userDetail: User = {name:'',desig:'',emailId:'',salary:0};
  constructor(private service : UserserviceService , private route: ActivatedRoute , private router : Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe( (data)=>{this.userDetail = data}  );
  }
  updateEmployee()
  {
    console.log(this.userDetail);
      this.service.updateEmployee(this.userDetail).subscribe( (data)=> {
       
        this.router.navigate(['listuser']);
        
      },(err)=>console.log(err)  );
  }

}
