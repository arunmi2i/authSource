import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HeaderPage } from '../header/header.page';

import { ExplorePageRoutingModule } from './explore-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage, HeaderPage]
})
export class ExplorePageModule {}
