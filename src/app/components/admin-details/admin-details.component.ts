import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  currentAdmin = null;
  message = '';

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.message = '';
    this.getAdmin(this.route.snapshot.paramMap.get('id'));
  }
  getAdmin(id): void {
    this.adminService.get(id)
      .subscribe(
        data => {
          this.currentAdmin= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      emailid: this.currentAdmin.emailid,
      password: this.currentAdmin.password
      
      
    };

    
  }

  updateAdmin(): void {
    this.adminService.update(this.currentAdmin.id, this.currentAdmin)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The admin was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAdmin(): void {
    this.adminService.delete(this.currentAdmin.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admindetails']);
        },
        error => {
          console.log(error);
        });
  }

}
