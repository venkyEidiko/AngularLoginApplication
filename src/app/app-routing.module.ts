import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSubmittedTransectionComponent } from './Submitted-Transections/view-submitted-transection.component';
import { MakeTransectionComponent } from './Make-trasection/make-transection.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate:[AuthGaurdService] },
  { path: 'view', component: ViewSubmittedTransectionComponent,canActivate:[AuthGaurdService] },
  { path: 'makeTransaction', component: MakeTransectionComponent,canActivate:[AuthGaurdService]},
  {path:"update/:id",component:UpdateEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  {path:"view/:id",component:ViewEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
