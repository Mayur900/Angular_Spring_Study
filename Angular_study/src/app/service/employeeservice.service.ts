import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

private url = "http://localhost:8080/";

  constructor(private httpClinet : HttpClient) { }

  getEmplyeeData() : Observable<Employee[]>{
    return this.httpClinet.get<Employee[]>(`${this.url + "getAllEmp"}`);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClinet.post(`${this.url + 'saveEmp'}` ,employee);
  }

  getEmployeById(id : any):Observable<Employee>{
    return this.httpClinet.get<Employee>(`${this.url + 'getEmpId/' + id}`)
  }

  updateEmployee(employee : Employee): Observable<Object>{
    return this.httpClinet.put(`${this.url + 'updateEmp'}` ,employee);
  }

}