import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../hangry/hangry.module').then(m => m.HangryModule)
  },
  {
    path: 'NotFound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'NotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
