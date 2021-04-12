import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common'
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'datatable', pathMatch: 'full' },
  {
    path: 'datatable', component: ProjectsComponent,
    loadChildren: () => import('./projects-datatable/projects-datatable.module').then(m => m.ProjectsDatatableModule),
  },
  {
    path: 'new', component: ProjectsComponent,
     loadChildren: () => import('./projects-details/projects-details.module').then(m => m.ProjectsDetailsModule),
  },
  {
    path: 'details', component: ProjectsComponent,
    loadChildren: () => import('./projects-details/projects-details.module').then(m => m.ProjectsDetailsModule),
  },

];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  providers: [DatePipe]
})
export class ProjectsModule { }
