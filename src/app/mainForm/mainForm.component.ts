import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-mainForm',
  templateUrl: './mainForm.component.html',
  styleUrls: ['./mainForm.component.css'],
})
export class MainFormComponent implements OnInit {
  opened: boolean = false;
  formGroup!: FormGroup;
  isVisible: boolean = false;
  employees!: any[];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private dService: DialogService
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      emP_ID: [''],
      emP_NAME: [''],
      departmenT_NAME: [''],
      datE_OF_JOIN: [''],
    });
  }

  onSubmit() {
    const formData = this.formGroup.value;
    this.employeeService.getEmployees(formData.emP_ID).subscribe((data) => {
      this.employees = [data];
      this.isVisible = true;
    });
  }

  resetForm() {
    this.formGroup.reset();
    this.isVisible = false;
  }
  toggleGridVisibility(): void {
    this.isVisible = !this.isVisible;
    this.isVisible = false;
  }

  public listitems: Array<string> = ['IT', 'HR'];

  onContainerClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  openDialog() {
    const d = this.dService.open({
      content: DialogComponentComponent,
      width: 400,
      height: 300,
      title: 'Demo Dialog',
    });
  }

  removeEmployee(dataItem: any): void {
    const empId = dataItem.emP_ID;
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(empId).subscribe(
        () => {
          console.log(`Employee with ID ${empId} deleted successfully`);

          this.refreshEmployees();
          this.isVisible = false;
          alert('SuccessfullyDeleted.......');
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }

  private refreshEmployees(): void {
    this.employeeService.getEmployees(FormData).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
        // Handle error response
      }
    );
  }
   
}
