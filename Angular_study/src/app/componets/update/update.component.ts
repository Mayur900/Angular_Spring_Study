import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

constructor(private arouter : ActivatedRoute,private empService : EmployeeserviceService,private routr : Router){}

  employee : Employee = new Employee
  id : any

  onUpdate(){
    this.empService.updateEmployee(this.employee).subscribe(data => {
      this.viewList();
    })

  }


  viewList() {
    console.log("viewList");
    this.routr.navigate(['employees']);
  }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.params['id'];
    this.empService.getEmployeById(this.id).subscribe(data => {
      this.employee = data;
    })   
  }
}
