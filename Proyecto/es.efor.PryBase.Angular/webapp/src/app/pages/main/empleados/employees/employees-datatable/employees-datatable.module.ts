import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDatatableComponent } from './employees-datatable.component';
import { BsDatatableModule, BsFormSelectModule } from 'ax-toolbox';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const routes: Routes = [
  {
    path: '', component: EmployeesDatatableComponent
  }
];

@NgModule({
  declarations: [EmployeesDatatableComponent],
  exports: [EmployeesDatatableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDatatableModule,
    TranslateModule.forChild(),
    CollapseModule,
    BsFormSelectModule
  ],
  providers: [
    DatePipe
  ]
})
export class EmployeesDatatableModule { }
