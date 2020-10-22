import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylibPageRoutingModule } from './mylib-routing.module';

import { MylibPage } from './mylib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylibPageRoutingModule
  ],
  declarations: [MylibPage]
})
export class MylibPageModule {}
