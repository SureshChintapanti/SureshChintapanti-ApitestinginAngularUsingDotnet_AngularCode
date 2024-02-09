import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule } from '@progress/kendo-angular-inputs';
import {
  ButtonsModule,
  DropDownButtonModule,
} from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MainFormComponent } from './mainForm/mainForm.component';

import { AddEmployeeComponent } from './AddEmployee/AddEmployee.component';
import { EmployeeService } from './employee.service';

import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddingEmployeeComponent } from './adding-employee/adding-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    AddEmployeeComponent,

    DialogComponentComponent,
      EmployeeComponent,
      AddingEmployeeComponent,
 
   ],
  imports: [
    BrowserModule,
    GridModule,
    DialogModule,
    WindowModule,
    InputsModule,
    HttpClientModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    IntlModule,
    LabelModule,
    FormFieldModule,
    ButtonsModule,
    IconsModule,
    DropDownsModule,
    DropDownsModule,
  ],
  providers: [EmployeeService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
