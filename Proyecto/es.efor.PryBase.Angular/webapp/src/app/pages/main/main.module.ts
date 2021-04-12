import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { BsMenuModule } from 'ax-toolbox';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { MainComponent } from './main.component';
import { CategoryPolicies } from 'src/app/shared/api/models';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';
defineLocale('es', esLocale);

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule), },
  {
    path: 'insurance',
    loadChildren: () => import('./insurance-policy/insurance-policy.module').then(m => m.InsurancePolicyModule),
  },{
    path: 'empleados', loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule)
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    FontAwesomeModule,
    BsDropdownModule,
    BsMenuModule,
  ]
})
export class MainModule { }
