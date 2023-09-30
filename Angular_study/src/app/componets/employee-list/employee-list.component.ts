

import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { Login } from 'src/app/login';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees : Employee[] = [];

  constructor(private employeeService: EmployeeserviceService) {}
  
  ngOnInit(): void {
    console.log("ngOnInit");
        
    this.employeeService.getEmplyeeData().subscribe(data => {
      console.log(data);
      this.employees = data;
      
    })   
  }

}
