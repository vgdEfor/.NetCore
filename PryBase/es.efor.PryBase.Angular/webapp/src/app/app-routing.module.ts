import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateGuard } from './shared/guards/translate/translate.guard';
import { YoutubeGuard } from './shared/guards/third-party-async-libraries/youtube/youtube.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [TranslateGuard, YoutubeGuard]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // anchorScrolling: 'enabled',
      // scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  imports: [],
})
export class AppRoutingFirstRouteModule { }
