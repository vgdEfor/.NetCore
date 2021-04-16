import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'datatable', pathMatch: 'full' },
  {
    path: 'datatable', component: EmployeesComponent, 
    loadChildren: () => import('./employees-datatable/employees-datatable.module').then(m => m.EmployeesDatatableModule),
  }, {
    path: 'new', component: EmployeesComponent,
    loadChildren: () => import('./employees-details/employees-details.module').then(m => m.EmployeesDetailsModule),
  }, {
    path: 'details', component: EmployeesComponent,
    loadChildren: () => import('./employees-details/employees-details.module').then(m => m.EmployeesDetailsModule),
  }
];

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
