import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesDetailsComponent } from './employees-details.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArrayTranslatorModule } from 'src/app/shared/components/array-translator/array-translator.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalConfirmationMessageModule } from 'src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.module';
import { BsFormSelectModule } from 'ax-toolbox';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const routes: Routes = [
  { path: '', component: EmployeesDetailsComponent },
  { path: ':id', component: EmployeesDetailsComponent },
];

@NgModule({
  declarations: [EmployeesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FormsModule,
    TooltipModule,
    FontAwesomeModule,
    ArrayTranslatorModule,
    BsDatepickerModule,
    ModalConfirmationMessageModule,
    BsFormSelectModule,
    CollapseModule
  ]
})
export class EmployeesDetailsModule { }
