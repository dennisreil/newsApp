import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndiaPage } from './india.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { IndiaPageRoutingModule } from './india-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IndiaPageRoutingModule,
  ],
  declarations: [IndiaPage]
})
export class IndiaPageModule {}
