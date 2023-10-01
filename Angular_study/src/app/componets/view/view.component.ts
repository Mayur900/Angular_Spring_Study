import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees : Employee[] = [];
  
  constructor(private employeeService: EmployeeserviceService, private router : Router) {}
  
  ngOnInit(): void {        
    this.employeeService.getEmplyeeData().subscribe(data => {
      this.employees = data;
    })   
  }


  updateEmployee(id: number) { 
  this.router.navigate(['update', id]);
  }


}
