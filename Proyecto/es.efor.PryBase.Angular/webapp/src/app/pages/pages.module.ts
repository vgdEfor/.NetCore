import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';
import { PolicyMenu } from '../shared/api/models/policy-menu';

const routes: Routes = [
  /** Authentication layout */
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [], canActivate: [],
  },
  /** Main layout */
  {
    path: '', component: MainComponent,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard],
    data: { policy: PolicyMenu.PolicyMenuPost }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
