import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

    
     authenticate(name, password) {
      console.log(name + " and " + password)
      return this.httpClient.post<any>('http://localhost:1010/Authenticate/login',{name,password}).pipe(
       map(
         userData => {
          
          console.log("userData",userData)
          return userData;
         }
       )
  
      );
    }




    // public authenticate(body): Observable<Object> {
    //   console.log("body",body);
    //   const headers = new HttpHeaders()
    //     .set('Content-Type', 'application/json');
    //   return this.httpClient.post(`http://localhost:1010/Authenticate/login`, body, { headers }).pipe(
    //     map(
    //       userData =>{
    //         sessionStorage.setItem('username',body.name);
          
          
    //       return userData;
    //       }
    //     )
    //   )
    // }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    // return true
  }

  logOut() {
    
    sessionStorage.removeItem('username')
  }
}