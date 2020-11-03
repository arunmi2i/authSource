import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDetailPage } from './personal-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalDetailPageRoutingModule {}
