import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private baseURL = "http://localhost:8080/getAllEmp";
  
  constructor(private htttpClient : HttpClient) { }

getEmployeeList(): Observable<Employee[]>{
  return this.htttpClient.get<Employee[]>(`${this.baseURL}`);
}
}
