import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl,FormGroup,Validators } from '@angular/forms'


@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  deform=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    salary:new FormControl('',[Validators.required,Validators.pattern('[0-9]+(?:\\.[0-9]+)?')]),
    email:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
  })

  get firstname(){
    return this.deform.get('firstname');
  }
  get lastname(){
    return this.deform.get('lastname');
  }
  get mobile(){
    return this.deform.get('mobile');
  }
  get salary(){
    return this.deform.get('salary');
  }
  get email(){
    return this.deform.get('email');
  }
  currentEmployee = null;
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      firstname: this.currentEmployee.firstname,
      lastname: this.currentEmployee.lastname,
      mobile: this.currentEmployee.mobile,
      email: this.currentEmployee.email,
      salary: this.currentEmployee.salary,
      
    };

    
  }

  updateTutorial(): void {
    this.tutorialService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentEmployee.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employeedetails']);
        },
        error => {
          console.log(error);
        });
  }
}
