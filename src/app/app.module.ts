import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSubmittedTransectionComponent } from './Submitted-Transections/view-submitted-transection.component';
import { HttpClientModule } from '@angular/common/http';
import { MakeTransectionComponent } from './Make-trasection/make-transection.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewSubmittedTransectionComponent,
    MakeTransectionComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
