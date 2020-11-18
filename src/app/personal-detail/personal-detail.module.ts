import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailPageRoutingModule } from './personal-detail-routing.module';

import { PersonalDetailPage } from './personal-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalDetailPage]
})
export class PersonalDetailPageModule {}
