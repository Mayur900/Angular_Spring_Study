import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private emplservice : EmployeeserviceService, private router : Router){}
  employee : Employee = new Employee();

    onSubmit(){
      this.emplservice.createEmployee(this.employee).subscribe(data =>{
        console.log(data);
      })
      this.viewList();
    }

    viewList() {
      console.log("viewList");
      this.router.navigate(['employees']);
    }


}
