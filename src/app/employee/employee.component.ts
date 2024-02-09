import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      EMP_NAME: ['', Validators.required],
      DEP_NAME: ['', Validators.required],
      DATE_OF_JOIN: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService
        .addEmployee_Department(this.employeeForm.value)
        .subscribe(
          (response) => {
            console.log('Employee added successfully:', response);
            alert('succefully Add......');
            this.employeeForm.reset();
          },
          (error) => {
            console.error('Error adding employee:', error);
          }
        );
    }
  }
}
