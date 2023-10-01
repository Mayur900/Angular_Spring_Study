import { Component } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
 
  constructor(private emplservice : EmployeeserviceService){}
  employee : Employee = new Employee();
  
    onSubmit(){
      this.emplservice.createEmployee(this.employee).subscribe(data =>{
        console.log(data);
      })
    }
}
