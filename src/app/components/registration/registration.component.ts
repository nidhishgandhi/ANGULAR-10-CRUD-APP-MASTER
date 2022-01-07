import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  admin = {
    emailid: '',
    password:''
    
  };
  submitted = false;

  constructor(private adminService: AdminService ) { }

  ngOnInit(): void {
  }

  saveAdmin(): void {
    if(this.admin.emailid=="nid@gmail.com" && this.admin.password=="nid"){
      const data = {

        emailid: this.admin.emailid,
        password: this.admin.password,
        
  
      };
  
      this.adminService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
    else{
      alert("Invalid credentials");
    }
    }
    

  newAdmin(): void {
    this.submitted = false;
    this.admin = {
      emailid: '',
      password: '',
      
    };
  }

}
