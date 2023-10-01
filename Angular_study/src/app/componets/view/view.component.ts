import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


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
