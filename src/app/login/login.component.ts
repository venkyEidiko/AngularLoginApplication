import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../login-request';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg:string = '';

  username = ''
  password = ''
  invalidLogin = false

  loginRes: LoginRequest;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  

  ngOnInit() {
  }

  checkLogin() {
    // this.router.navigate([''])
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.loginRes = data
        console.log("data:",data )
        console.log("LoginStatus", this.loginRes);
        console.log(this.loginRes.status == 200);
        
        if(this.loginRes != null){
          if(this.loginRes.status == 200 ){
            sessionStorage.setItem('username',this.username);

            console.log("losgin success with ", data.status);
            this.errorMsg = this.loginRes.massage
            console.log("errormsg",this.loginRes.massage);
            
            this.router.navigate([''])
            this.invalidLogin = false
          }
            else if (this.loginRes.status == 401) {
              console.log("Invalid username and password")
              this.errorMsg = 'OOOPS! Invalid Name or Password';
              console.log("errormsg",this.loginRes.massage);
              
            } else if (this.loginRes.status == 403) {
              console.log("User Account has been lokked")
              this.errorMsg = 'OOOPS!! Your Account is Locked Please try after some time.'
              console.log("errormsg",this.loginRes.massage);
              
            }else{
              this.errorMsg='Login Failed! Kindly create an user '
            }
          
        }

        console.log("errormsg,",this.errorMsg);
        
       
      
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

}