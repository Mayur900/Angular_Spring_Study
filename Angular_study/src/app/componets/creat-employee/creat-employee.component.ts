import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent{

constructor(private emplservice : EmployeeserviceService){}
employee : Employee = new Employee();

  onSubmit(){
    this.emplservice.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
    })
  }
}
