import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UpdateEmployeeFormComponent } from './update-employee-form/update-employee-form.component';

const routes: Routes = [
  { path: 'employee-table', component: EmployeeTableComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'update-employee-form/:id', component: UpdateEmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
