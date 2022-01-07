import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admindetails: any;
  currentAdmin= null;
  currentIndex = -1;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.retrieveAdmins();
  }

  retrieveAdmins(): void {
    this.adminService.getAll()
      .subscribe(
        data => {
          this.admindetails = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAdmins();
    this.currentAdmin = null;
    this.currentIndex = -1;
  }

  setActiveAdmin(admin, index): void {
    this.currentAdmin = admin;
    this.currentIndex = index;
  }

  removeAllAdmins(): void {
    this.adminService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
