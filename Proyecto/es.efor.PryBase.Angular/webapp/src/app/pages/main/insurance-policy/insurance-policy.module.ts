import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancePolicyComponent } from './insurance-policy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: InsurancePolicyComponent, loadChildren: () => import('./list/list.module').then(m => m.ListModule), },
  { path: 'new', component: InsurancePolicyComponent, loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), },
  { path: 'details', component: InsurancePolicyComponent, loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), },
  // {
  //   path: '',
  //   component: InsurancePolicyComponent,
  //   children: [
  //     { path: '', redirectTo: 'list', pathMatch: 'full' },
  //     { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule), },
  //     { path: 'new', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), },
  //     { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), },
  //   ]
  // },
];

@NgModule({
  declarations: [InsurancePolicyComponent],
  exports: [InsurancePolicyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InsurancePolicyModule { }
