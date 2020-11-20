import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangryComponent } from './hangry.component';

const routes: Routes = [
  {
    path: '',
    component: HangryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangryRoutingModule { }
