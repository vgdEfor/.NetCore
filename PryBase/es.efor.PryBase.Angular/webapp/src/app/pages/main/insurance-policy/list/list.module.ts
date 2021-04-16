import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { BsDatatableModule } from 'ax-toolbox';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';
import { PostPolicies } from 'src/app/shared/api/models';

const routes: Routes = [
  {
    path: '', component: ListComponent,
    canLoad: [AuthGuard], canActivate: [AuthGuard],
    data: {
      policy: PostPolicies.PostList,
    }
  },
];

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
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
export class ListModule { }
