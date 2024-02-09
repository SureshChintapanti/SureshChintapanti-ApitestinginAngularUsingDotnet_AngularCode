import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataModel } from './DataModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7199/api/DbPost/AddEmployee';

  constructor(private http: HttpClient) {}

  addEmployee(newEmployee: DataModel) {
    return this.http.post(this.apiUrl, newEmployee);
  }
  private baseUrl = 'https://localhost:7199/DbGet/GetEmpById';

  getEmployees(id: any): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + '/' + id);
  }

  private PostDepnameapiUrl =
    'https://localhost:7199/api/EmployeePost/AddEmployee';

  addEmployee_Department(employee: any): Observable<any> {
    return this.http.post<any>(this.PostDepnameapiUrl, employee);
  }

  private DeleteUrl = 'https://localhost:7199/api/Employee/DeleteEmployee';
  deleteEmployee(empId: number): Observable<any> {
    return this.http.delete<any>(`${this.DeleteUrl}/${empId}`,{responseType:'text' as 'json'});
  }
}
