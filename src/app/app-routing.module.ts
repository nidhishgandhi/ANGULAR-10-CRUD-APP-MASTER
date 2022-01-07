import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent }, 
  { path: 'employeedetails', component: TutorialsListComponent },
  { path: 'add/employeedetailss', component: TutorialsListComponent },
  { path: 'employeedetails/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admindetails', component: AdminListComponent },
  { path: 'admindetails/:id', component: AdminDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
