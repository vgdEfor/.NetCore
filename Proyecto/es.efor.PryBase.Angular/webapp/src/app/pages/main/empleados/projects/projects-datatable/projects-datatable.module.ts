import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsDatatableComponent } from './projects-datatable.component';
import { BsDatatableModule } from 'ax-toolbox';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from 'src/app/shared/api/models';

const routes: Routes = [
  {
    path: '', component: ProjectsDatatableComponent
  }
];

@NgModule({
  declarations: [ProjectsDatatableComponent],
  exports: [ProjectsDatatableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDatatableModule,
    TranslateModule.forChild(),

  ],
  providers: [
    DatePipe,
  ]
})
export class ProjectsDatatableModule { }
