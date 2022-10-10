import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';
import { TransectionData } from '../transection-data';

@Component({
  selector: 'app-make-transection',
  templateUrl: './make-transection.component.html',
  styleUrls: ['./make-transection.component.css']
})
export class MakeTransectionComponent implements OnInit {

  
  transectionData = new TransectionData("",1,7995391069,"hyd",1000,"AED","Curepipe",5100021,"","");

  // transectionData : TransectionData;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.transectionData)
        .subscribe( data => {
          console.log(data);
          
          alert("Employee created successfully.");
          this.goToEmployeeList();
        },
        error=>{
          console.log("error at saving "+ error);
          
        });
      

  };

  goToEmployeeList(){
    this.router.navigate(['']);
  }
  
  onSubmit(){
    console.log("create record"+ this.transectionData);
    this.createEmployee();
    
  }

}