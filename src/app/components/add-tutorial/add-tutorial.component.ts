import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import {FormControl,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  emform=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    salary:new FormControl('',[Validators.required,Validators.pattern('[0-9]+(?:\\.[0-9]+)?')]),
    email:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
  })

  get firstname(){
    return this.emform.get('firstname');
  }
  get lastname(){
    return this.emform.get('lastname');
  }
  get mobile(){
    return this.emform.get('mobile');
  }
  get salary(){
    return this.emform.get('salary');
  }
  get email(){
    return this.emform.get('email');
  }
  employee = {
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    salary:''
    
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {

      firstname: this.employee.firstname,
      lastname: this.employee.lastname,
      mobile: this.employee.mobile,
      email: this.employee.email,
      salary: this.employee.salary,

    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.employee = {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      salary:''
    };
  }

}
