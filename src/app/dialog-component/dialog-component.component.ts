import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.css',
})
export class DialogComponentComponent {
  employeeForm: FormGroup;
  opened = false;

  dropdownlistitems: string[] = ['IT', 'HR'];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.formBuilder.group({
      EMP_NAME: ['', Validators.required],
      DEP_NAME: [''],
      DATE_OF_JOIN: [''],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService
        .addEmployee_Department(this.employeeForm.value)
        .subscribe(
          (response) => {
            console.log('Employee added successfully:', response);

            this.employeeForm.reset();
            alert('SuccessFully add........');
          },
          (error) => {
            console.error('Error adding employee:', error);
          }
        );
    }
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }
}
