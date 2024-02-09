import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { Employee } from '../model';
import { DataModel } from '../DataModel';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-AddEmployee',
  templateUrl: './AddEmployee.component.html',
  styleUrls: ['./AddEmployee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {}
  newEmployee: DataModel = {
    EMP_NAME: '',
    DEP_ID: 0,
    DATE_OF_JOIN: '',
  };

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      () => {
        alert('Employee added successfully');
        this.newEmployee = { EMP_NAME: '', DEP_ID: 0, DATE_OF_JOIN: '' };
      },
      (error) => {
        console.log(error);
      }
    );
  }



  ngOnInit() {
    this.formGroup = this.createFormGroup();
  }

  @Input() opened = false;

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  dataSaved = false;
public dropdownlistitems: Array<number> = [1, 2];

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      EmployeeName: ['', Validators.required],
      Department: [''],
      DateOFJoin: [''],
    });
  }



  // public dropdownlistitems: Array<number> = [1, 2];
  // public dropdownlistitems: Array<string> = ['IT', 'HR'];




  // employeeForm: FormGroup;

  // constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
  //   this.employeeForm = this.fb.group({
  //     EMP_NAME: ['', Validators.required],
  //     DEP_NAME: ['', Validators.required],
  //     DATE_OF_JOIN: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.employeeForm.valid) {
  //     this.employeeService
  //       .addEmployee_Department(this.employeeForm.value)
  //       .subscribe(
  //         (response) => {
  //           console.log('Employee added successfully:', response);

  //           this.employeeForm.reset();
  //         },
  //         (error) => {
  //           console.error('Error adding employee:', error);
  //         }
  //       );
  //   }
  // }
}















 
