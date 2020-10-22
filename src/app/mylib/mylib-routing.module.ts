import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MylibPage } from './mylib.page';

const routes: Routes = [
  {
    path: '',
    component: MylibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MylibPageRoutingModule {}
